import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AuthProvider {

  public message: any = "I'm new here";

  constructor(public http: Http) {
    console.log('Hello AuthProvider Provider');
  }

  setMessage(message) {
    this.message = message;
  }

}
