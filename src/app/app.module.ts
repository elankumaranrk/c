import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { MaterialModule } from '@angular/material';
import {ListCardComponent} from './listcard/listcard.component';
import {NewChecklistComponent} from './addchecklist/add.checklist.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {ReverseCheckList} from './shared/checklistfilter';

import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

export const firebaseConfig = {
    apiKey: "AIzaSyCSb0ueo60Mkgp9mwr8ALzrycovN8hsYRw",
    authDomain: "mag-gre.firebaseapp.com",
    databaseURL: "https://mag-gre.firebaseio.com",
    storageBucket: "mag-gre.appspot.com",
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
    ReverseCheckList
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
                          {path:'**', redirectTo:'welcome' } ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
