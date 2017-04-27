import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// ****
// COMPONENTS
// ****
import { AppComponent } from './app.component';

// ****
// FIREBASE
// ****
import {AngularFireModule} from 'angularfire2';
export const firebaseConfig = {
  apiKey: "AIzaSyDveQqIJZGCXDlY7wdmrM2m_HCAwPHrMX0",
  authDomain: "restraunt-orders.firebaseapp.com",
  databaseURL: "https://restraunt-orders.firebaseio.com",
  storageBucket: "restraunt-orders.appspot.com",
  messagingSenderId: "609582080770"
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
