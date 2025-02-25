import { Component, inject } from '@angular/core';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { UserloginComponent } from '@app/components/userlogin/userlogin.component';
import { RootState } from '@app/state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from './state';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  showIframe: boolean = false;
  trustedUrl: any;
  user$: Observable<User>
  private sanitizer = inject(DomSanitizer);
  constructor(private titleService: Title, private store :Store<RootState>) {
    titleService.setTitle("User App")
    this.trustedUrl = this.sanitizer.bypassSecurityTrustResourceUrl('http://localhost:3000/auth');
    this.user$ = this.store.select((state) => state.user)
    this.user$.subscribe(u =>{
      console.log("userer subscribe",u.firstName)
    })

  }
  public openIframe() {
    console.log('user clicked on button');
    this.showIframe = true;
  }
  closeIframe() {
    this.showIframe = false;
  }
}
