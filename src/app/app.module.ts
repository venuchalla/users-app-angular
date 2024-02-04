import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { appConfig } from './app.config';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UserComponent } from './pages/user/user.component';



@NgModule({
  declarations: [AppComponent,PageNotFoundComponent,UserComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers:appConfig.providers,
  bootstrap:[AppComponent]
})
export class AppModule { }
