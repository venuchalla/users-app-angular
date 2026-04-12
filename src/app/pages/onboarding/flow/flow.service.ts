import { Injectable, signal, computed } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { FlowConfig, FlowStep, FlowState } from '../flow/flow.model';

@Injectable({ providedIn: 'root' })
export class FlowService {
  private _config = signal<FlowConfig | null>(null);
  private _state = signal<FlowState>({
    currentStepId: '',
    completedSteps: [],
    formData: {}
  });

  // Public computed signals
  config = computed(() => this._config());
  state = computed(() => this._state());

  currentStep = computed<FlowStep | null>(() => {
    const cfg = this._config();
    const st = this._state();
    if (!cfg) return null;
    return cfg.steps.find(s => s.id === st.currentStepId) ?? null;
  });

  currentStepIndex = computed(() => {
    const cfg = this._config();
    const st = this._state();
    if (!cfg) return 0;
    return cfg.steps.findIndex(s => s.id === st.currentStepId);
  });

  totalSteps = computed(() => this._config()?.steps.length ?? 0);

  progressPercent = computed(() => {
    const total = this.totalSteps();
    if (total === 0) return 0;
    return Math.round(((this.currentStepIndex() + 1) / total) * 100);
  });

  isFirstStep = computed(() => this.currentStepIndex() === 0);
  isLastStep = computed(() => this.currentStepIndex() === this.totalSteps() - 1);

  completedSteps = computed(() => this._state().completedSteps);

  constructor(private http: HttpClient, private router: Router) {}

  loadConfig(): Observable<FlowConfig> {
    return this.http.get<FlowConfig>('/assets/flow-config.json').pipe(
      tap(config => {
        this._config.set(config);
        this._state.update(s => ({
          ...s,
          currentStepId: config.steps[0]?.id ?? ''
        }));
      })
    );
  }

  navigateToStep(stepId: string): void {
    const cfg = this._config();
    if (!cfg) return;
    const step = cfg.steps.find(s => s.id === stepId);
    if (!step) return;
    this._state.update(s => ({ ...s, currentStepId: stepId }));
    this.router.navigate(['/onboarding', step.currentPage]);
  }

  goNext(formData?: Record<string, unknown>): void {
    const step = this.currentStep();
    if (!step) return;

    // Save form data
    if (formData) {
      this._state.update(s => ({
        ...s,
        formData: { ...s.formData, [step.currentPage]: formData }
      }));
    }

    // Mark step as completed
    this._state.update(s => ({
      ...s,
      completedSteps: s.completedSteps.includes(step.id)
        ? s.completedSteps
        : [...s.completedSteps, step.id]
    }));

    if (step.nextPage) {
      const nextStep = this._config()?.steps.find(s => s.currentPage === step.nextPage);
      if (nextStep) {
        this.navigateToStep(nextStep.id);
      }
    }
  }

  goBack(): void {
    const step = this.currentStep();
    if (!step?.prevPage) return;
    const prevStep = this._config()?.steps.find(s => s.currentPage === step.prevPage);
    if (prevStep) {
      this.navigateToStep(prevStep.id);
    }
  }

  isStepCompleted(stepId: string): boolean {
    return this._state().completedSteps.includes(stepId);
  }

  getFormData(page: string): Record<string, unknown> {
    return (this._state().formData[page] as Record<string, unknown>) ?? {};
  }

  resetFlow(): void {
    const cfg = this._config();
    if (!cfg) return;
    this._state.set({
      currentStepId: cfg.steps[0]?.id ?? '',
      completedSteps: [],
      formData: {}
    });
    this.router.navigate(['/onboarding', cfg.startPage]);
  }
}