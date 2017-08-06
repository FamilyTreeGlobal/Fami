import { Injectable } from '@angular/core';

export class USER {
  public firstname: string;
  public lastname: string;
  public token: string;
  public isLoggedIn: boolean;
  public profileid: string;
}

export interface resetPwd {    
    password: string;
    confirmPassword: string;
}

export const USER_DATA: USER = {
  firstname : '',
  lastname: '',
  token: '',
  isLoggedIn: false,
  profileid: ''
};
