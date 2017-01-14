import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { RedditProvider } from '../../providers/reddit-provider';
import { LocationProvider } from '../../providers/location-provider';

/*
  Generated class for the Profile page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
  providers: [RedditProvider, LocationProvider] // Creates a unique provider for this page
})
export class ProfilePage {

  posts: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private redditProvider: RedditProvider,
              private locationProvider: LocationProvider) {

    // this.posts = this.redditProvider.getUrls();
    // console.log(this.posts);
    this.loadPosts();
  }

  changeMessage() {
    this.redditProvider.setMessage("Set message from Profile");
  }

  loadPosts(ignoreCache = false) {
    console.log('Loading Posts')
    this.redditProvider.load(ignoreCache)
    .then(data => {
      this.posts = data;
    });

    this.locationProvider.getLocation()
      .then(data => {
        console.log(data);
      });

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
