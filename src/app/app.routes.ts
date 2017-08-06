import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgotpasswordComponent } from './login/forgotpassword.component';
import { HomeComponent } from './home/home.component';


declare var System: any;

export const ROUTES: Routes = [
  { path: '', component:LoginComponent },
  { path: 'forgotPassword', component:ForgotpasswordComponent },
  { path: 'home', component:HomeComponent }
];