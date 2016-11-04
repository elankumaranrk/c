import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { MaterialModule } from '@angular/material';
import {ListCardComponent} from './listcard/listcard.component';
import {DetailComponent} from './detail/detail.component';
import {NewChecklistComponent} from './addchecklist/add.checklist.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {ReverseCheckList} from './shared/checklistfilter';

import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

export const firebaseConfig = {
     apiKey: "AIzaSyB0kyb84FAtqyBKPQrADVTIDHlaaz-_a10",
    authDomain: "common-gre.firebaseapp.com",
    databaseURL: "https://common-gre.firebaseio.com",
    storageBucket: "common-gre.appspot.com"
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
}


@NgModule({
  declarations: [
    AppComponent,
    ListCardComponent,
    NewChecklistComponent,
    WelcomeComponent,
    ReverseCheckList,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig),
    MaterialModule.forRoot(),
    RouterModule.forRoot([{path:'new', component:NewChecklistComponent},
                          {path:'', component:ListCardComponent},
                          {path:'checks', component:ListCardComponent},
                          {path:'new', component:NewChecklistComponent},
                          {path:'detail/:id', component:DetailComponent},
                          {path:'**', redirectTo:'welcome' } ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
