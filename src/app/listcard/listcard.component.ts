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

  convert(date1:string):string
  {
    var a = new Date(date1);
    a.setTime(a.getTime() + (5*60*60*1000));
    return a.toDateString();
  }
   isToday(date1:string):boolean
  {
    var a = new Date(date1);
    a.setTime(a.getTime() + (5*60*60*1000));
    return (new Date().getDate() == a.getDate() && new Date().getMonth() == a.getMonth() && new Date().getFullYear() == a.getFullYear());
  }

   updateItem(key: string, newText: string) {
    this.notes.update(key, { text: newText });
  }

}