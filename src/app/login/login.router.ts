import { NgModule }            from '@angular/core';
import { RouterModule }        from '@angular/router';
import { LoginComponent } from './login.component';
import { ForgotpasswordComponent }  from './forgotpassword.component';
@NgModule({
  imports: [RouterModule.forChild([
     {
        path : 'login',
        component : LoginComponent
      },
      {
        path : 'forgotPassword',
        component : ForgotpasswordComponent
      }
  ])],
  exports : [RouterModule]
})
export class LoginRoutingModule {}
