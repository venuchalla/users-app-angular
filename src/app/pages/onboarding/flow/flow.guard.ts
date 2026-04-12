import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { catchError, map, of } from 'rxjs';
import { FlowService } from './flow.service';

export const flowGuard: CanActivateFn = (route) => {
  const flowService = inject(FlowService);
  const router = inject(Router);

  const config$ = flowService.config()
    ? of(flowService.config())
    : flowService.loadConfig().pipe(catchError(() => of(null)));

  return config$.pipe(
    map((config) => {
      if (!config) {
        router.navigate(['/']);
        return false;
      }

      const requestedPage = route.routeConfig?.path ?? '';
      const step = config.steps.find((s) => s.currentPage === requestedPage);
      if (!step) {
        router.navigate(['/onboarding', config.startPage]);
        return false;
      }

      const stepIndex = config.steps.indexOf(step);
      if (stepIndex === 0) return true;

      for (let i = 0; i < stepIndex; i++) {
        const prevStep = config.steps[i];
        if (!prevStep.canSkip && !flowService.isStepCompleted(prevStep.id)) {
          router.navigate(['/onboarding', prevStep.currentPage]);
          return false;
        }
      }

      return true;
    }),
  );
};