import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { LoginModule } from './login/login.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,  
    FormsModule,
    LoginModule,
    ReactiveFormsModule,  
    RouterModule.forRoot(ROUTES,{ useHash: false })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
