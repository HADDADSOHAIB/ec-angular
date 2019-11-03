import { Injectable } from '@angular/core';
import { Credentials } from '../../Model/credentials';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Email } from '../../Model/email';
import { Token } from '../../Model/token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  createAccount(credentials: Credentials) {
      return this.http.post("http://socialecommerce-env.ftg94fw4p8.us-east-2.elasticbeanstalk.com/api/Account/create",credentials) as Observable<Token>;
  }
  login(credentials: Credentials) {
    return this.http.post("http://socialecommerce-env.ftg94fw4p8.us-east-2.elasticbeanstalk.com/api/Account/login",credentials) as Observable<Token>;
}
  checkEmail(email:Email) {
      return this.http.post("http://socialecommerce-env.ftg94fw4p8.us-east-2.elasticbeanstalk.com/api/Account/check",email) as Observable<any>;
  }

  constructor(
    private http:HttpClient
  ) { }
}