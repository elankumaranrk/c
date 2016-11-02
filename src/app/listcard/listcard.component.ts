import { Component, Input} from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { BrowserModule } from '@angular/platform-browser';
import 'rxjs/add/operator/map'

@Component({
    selector: 'list-card',
    templateUrl: 'list-card.component.html',
    styleUrls: ['list-card.component.css'],
})
export class ListCardComponent {
    notes: FirebaseListObservable<any[]>;
    constructor(public af: AngularFire) {
      this.notes = af.database.list('notes', {
        query:{
          orderByChild: 'ondate'
        }
      });
  }
 login() {
    this.af.auth.login();
  }

   updateItem(key: string, newText: string) {
    this.notes.update(key, { text: newText });
  }

}