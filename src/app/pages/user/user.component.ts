import { Component, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  showIframe: boolean = false;
  trustedUrl : any;
  private sanitizer = inject(DomSanitizer)
  constructor(){
    this.trustedUrl = this.sanitizer.bypassSecurityTrustResourceUrl("")
  }
  public openIframe() {
    console.log("user clicked on button");
    this.showIframe=true;
  }
  closeIframe(){
    this.showIframe=false;
  }
}
