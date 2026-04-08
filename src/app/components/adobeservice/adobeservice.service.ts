import { Injectable } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';

declare global {
  interface Window {
    AdobeDC: any[];
  }
}
@Injectable({
  providedIn: 'root',
})
export class AdobeserviceService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {

  }

  push(adobeDCView: any) {
    if (isPlatformBrowser(this.platformId)) {
      window.AdobeDC = window.AdobeDC || [];
      window.AdobeDC.push(adobeDCView);
    }
  }

  trackEvent(eventName: string, eventData: any) {
    this.push({
      event: eventName,
      data: eventData,
    });
  }
}
