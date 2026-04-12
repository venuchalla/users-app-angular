import { Injectable } from '@angular/core';
import { CanMatch, Router, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CssCourseAppGuard implements CanMatch {
  constructor(private router: Router) {}

  canMatch(): Observable<boolean | UrlTree> {
    console.log('CssCourseAppGuard canMatch called');
    return of(true);
  }
}
