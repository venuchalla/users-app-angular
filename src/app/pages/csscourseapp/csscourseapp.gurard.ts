import { Injectable } from '@angular/core';
import { CssCourseAppRoutingService } from './csscourseapprouting.service';
import { CanMatch, Router, UrlTree } from '@angular/router';
import { catchError, map, Observable, of, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CssCourseAppGuard implements CanMatch {
  private loaded = false;
  private cssCourseAppRoutingService: CssCourseAppRoutingService;
  constructor(
    private cssCourseAppRoutingServiced: CssCourseAppRoutingService,
    private router: Router,
  ) {
    this.cssCourseAppRoutingService = cssCourseAppRoutingServiced;
  }
  canMatch(): Observable<boolean | UrlTree> {
    console.log('CssCourseAppGuard canMatch called');
    if (this.loaded) return of(true);
    return this.cssCourseAppRoutingService.getChildRoutes().pipe(
      tap(() => {
        this.loaded = true;
      }),
      map(() => true),
      catchError(() => of(this.router.createUrlTree(['/home']))),
    );
  }
}
