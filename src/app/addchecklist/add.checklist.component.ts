import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';
import { checklist } from '../shared/model/checklist';

@Component({
    templateUrl: 'add.checklist.component.html'
})
export class NewChecklistComponent implements OnInit {
    newnote: checklist;
    notes: FirebaseListObservable<any[]>;
    pageTitle: String = "Add a checklist!";
    constructor(public af: AngularFire, private _router: Router) {
        this.newnote = new checklist();
        this.newnote = {editorial:false, mancomp:false, mandesc:'', ondate:'', othercomp:false, otherdesc:'', rc:false,tenwords:false, testcomp:false, testdesc:'', words:false};
        this.notes = af.database.list('notes');
    }
    submitted = false;
    onSubmit() { this.submitted = true; }
    ngOnInit() { }

    goBack() {
        this._router.navigate(['/checks']);
    }
    saveNote()
    {
        console.log(this.newnote);
        this.notes.push(this.newnote);
    }
}