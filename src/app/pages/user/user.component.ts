import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, Title } from '@angular/platform-browser';
import { UserloginComponent } from '@app/components/userlogin/userlogin.component';
import { RootState } from '@app/state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { getAppUrl } from '../../utils/app-url';
import { User } from './state';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  imports:[UserloginComponent],
  styleUrl: './user.component.scss',
})
export class UserComponent {
  showIframe: boolean = false;
  trustedUrl: SafeResourceUrl | null;
  user$: Observable<User>
  private sanitizer = inject(DomSanitizer);
  constructor(private titleService: Title, private store :Store<RootState>) {
    titleService.setTitle("User App")
    this.trustedUrl = environment.authWidgetUrl
      ? this.sanitizer.bypassSecurityTrustResourceUrl(environment.authWidgetUrl)
      : null;
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
