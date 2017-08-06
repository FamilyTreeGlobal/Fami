import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule, ReactiveFormsModule }        from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { LoginComponent } from './login.component';
import { ValidationService } from '../validation.service';
import { ControlMessages } from './controlMessages';
import { ForgotpasswordComponent } from './forgotpassword.component';

@NgModule({
  imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule
     ],
    declarations: [
      LoginComponent,
      ControlMessages,
      ForgotpasswordComponent
        ],
    providers: [
        ValidationService
    ]

})
export class LoginModule {

}
