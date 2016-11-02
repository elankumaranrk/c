import { Component, OnInit} from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
   
})
export class AppComponent implements OnInit{
  title = 'app works!';
  
  constructor(public af: AngularFire) {
    
  }

   login() {
    this.af.auth.login();
  }

  logout() {
     this.af.auth.logout();
  }

  ngOnInit()
  {

  }
}
