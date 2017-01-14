import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the RedditProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class RedditProvider {

  public url: any = 'https://www.reddit.com/r/gifs/new/.json?limit=10'
  public message: any = "message from RedditProvider"
  private data: any;

  constructor(public http: Http) {
    console.log('Hello RedditProvider Provider');
  }

  setMessage(message) {
    this.message = message;
  }

  load(ignoreCache = false) {
    if (this.data && !ignoreCache) {
      console.log('Using cached data');
      // already loaded data
      return Promise.resolve(this.data);
    }

    console.log('Getting new data');
    // don't have the data yet
    return new Promise(resolve => {
      // We're using Angular HTTP provider to request the data,
      // then on the response, it'll map the JSON data to a parsed JS object.
      // Next, we process the data and resolve the promise with the new data.
      this.http.get(this.url)
        .map(res => res.json())
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          this.data = data.data.children;
          resolve(this.data);
        });
    });
  }

}
