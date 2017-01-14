import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Geolocation } from 'ionic-native';


/*
  Generated class for the Location provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class LocationProvider {

  private pos;
  private lastRetrieved = new Date();

  constructor(public http: Http) {
    console.log('Hello Location Provider');
  }


  getLocation() {
    return new Promise(resolve => { 
      Geolocation.getCurrentPosition().then(pos => {
        resolve(pos);
      });
    });
  }

}
