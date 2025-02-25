import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { appConfig } from './app.config';
import { PageNotFoundComponent } from '@components/page-not-found/page-not-found.component';
import { UserComponent } from '@pages/user/user.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from '@pages/counter/counter.reducer';
import { CounterComponent } from '@pages/counter/counter.component';
import { UserloginComponent } from './components/userlogin/userlogin.component';
import {HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';



@NgModule({
  declarations: [AppComponent,UserComponent],
  //StoreModule.forRoot({}), it moved to app config providers
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CounterComponent,
    PageNotFoundComponent,
    UserloginComponent,
    HttpClientModule
  ],
  providers:appConfig.providers,
  bootstrap:[AppComponent]
})
export class AppModule { }
