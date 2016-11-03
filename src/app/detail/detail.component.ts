import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Router, ActivatedRoute } from '@angular/router';
import { checklist } from '../shared/model/checklist';

@Component({
    templateUrl: 'detail.component.html',
        styleUrls : ['detail.component.css'] 
})
export class DetailComponent implements OnInit {
    note2: FirebaseObjectObservable<any>;
    note:checklist;
    showPage:boolean = false;
    notes: FirebaseListObservable<any[]>;
    url:string;
     constructor(public af: AngularFire, private _router: Router, private _route:ActivatedRoute) {
       
    }

    save()
    {
        this.note2 = this.af.database.object(this.url);
        console.log('saving data...');
        this.note2.update({
            editorial:this.note.editorial,
             mancomp:this.note.mancomp, 
             othercomp:this.note.othercomp,
             rc:this.note.rc,
             tenwords:this.note.tenwords, 
             testcomp:this.note.testcomp,  words:this.note.words
        }).then(_ => console.log('success'))
         .catch(err => console.log(err, 'You dont have access!'));;
          this.note2.subscribe(item=> {this.note = item;
             this.showPage = true;});
             this.goBack();

    }
     goBack() {
        this._router.navigate(['/checks']);
    }

    ngOnInit() { this.notes = this.af.database.list('notes');
        console.log(this._route.snapshot.params['id']);
        this.url = '/notes/'+ this._route.snapshot.params['id'];
        console.log(this.url);
        this.note2 = this.af.database.object(this.url);
         this.note2.subscribe(item=> {this.note = item;
             console.log('subscribed...');
             this.showPage = true;}); }
}