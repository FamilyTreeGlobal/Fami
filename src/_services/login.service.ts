import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { BaseService } from '../_services/base.service'
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';


@Injectable()
export class LoginService extends BaseService {

  constructor(http: Http) {
    super(http);
  }

  authenticate(user: any) {
    return this.post('users/authenticate', user);
  }
  
  register(user: any) {        
    return this.post('users/register', user);
  }
  activateAccount(token: string) {
    return this.get('Account/ConfirmEmail?token=' + token);
  }
  
  
}