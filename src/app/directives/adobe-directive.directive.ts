import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { AdobeserviceService } from '@app/components/adobeservice/adobeservice.service';

@Directive({
  selector: '[appAdobeDirective]',
})
export class AdobeDirectiveDirective {
  @Input() fieldName: string = '';

  constructor(
    private el: ElementRef,
    private adobeservice:AdobeserviceService
  ) {}

  @HostListener('focus')
  onFocus() {
    console.log('Input field focused directive' , this.el.nativeElement.value);
    const payload = {
      field: this.fieldName || this.el.nativeElement.name,
      value: this.el.nativeElement.value,
    };

    this.adobeservice.trackEvent(this.fieldName,payload);
  }
}
