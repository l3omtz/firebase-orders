import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable } from 'angularfire2';
import {MdCardModule} from '@angular/material';



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
    //this.items.push({ message: "test" });

    // @TODO AUTH METHOD -- LATER
    // this._af.auth.subscribe(auth => {
    //   if (auth) {
    //     this.name = auth;
    //   }
    // });
  }

  // @TODO LOGIN --  LATER
  // logIn() {
  //    this._af.auth.login({
  //    provider: AuthProviders.Anonymous,
  //    method: AuthMethods.Anonymous
  //  });
  // }


  ngOnInit() { }

}
