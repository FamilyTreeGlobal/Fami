import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { BaseService } from '../_services/base.service'
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';


@Injectable()
export class UserService extends BaseService {

  constructor(http: Http) {
    super(http);
  }

  getUsersList() {
    return this.get('users/getUsersList');
  }
  
  
  
}