import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable } from 'angularfire2';


@Component({
  selector: 'home-view',
  templateUrl: './home.html'
})

export class HomeComponent implements OnInit {
  items: FirebaseListObservable<any>;
  name: any;
  msgVal = '';


  constructor(private _af: AngularFire) {
    // Make root object in DB
    this.items = this._af.database.list('/items');

    this._af.auth.subscribe(auth => {
      if (auth) {
        this.name = auth;
      }
    });
  }

  logIn() {
    this._af.auth.login({
      provider: AuthProviders.Anonymous,
      method: AuthMethods.Anonymous
    });
    this.items.push({ message: "test" });
  }


  ngOnInit() {

  }

}
