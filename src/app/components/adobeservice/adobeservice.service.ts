import { Injectable } from '@angular/core';

declare global {
  interface Window {
    AdobeDC: any[];
  }
}
@Injectable({
  providedIn: 'root'
})
export class AdobeserviceService {

  constructor() { }

  push(adobeDCView: any) {
    window.AdobeDC = window.AdobeDC || [];
    window.AdobeDC.push(adobeDCView);
  } 

  trackEvent(eventName: string, eventData: any) {
   this.push({
      event: eventName,
      data: eventData
    }); 
  }
}
