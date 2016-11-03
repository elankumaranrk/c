import { Pipe, PipeTransform } from '@angular/core';
import 'rxjs/add/operator/map';

@Pipe({ name: 'reverse' })
export class ReverseCheckList implements PipeTransform {
  transform(value: any[]): any[] {
    if (value) {

      return value.reverse().filter(note => {
        var notedate = new Date(note.ondate);
        notedate.setTime(notedate.getTime() + 5 * 60 * 60 * 1000)
        var today1 = new Date().setHours(0, 0, 0, 0);
        var today = new Date(today1);
        if (notedate.getDate() === today.getDate() && notedate.getMonth() === today.getMonth()) return true;
        else {
          var day = notedate.getDay();
          var isWeekend = (day == 6) || (day == 0);
          if (isWeekend) {
            return false;
          }
          else {
            if (note.words && note.rc && note.editorial && note.tenwords && note.othercomp && note.mancomp && (note.testcomp || note.testcomp == "NONE" || note.testcomp == "")) return false;
            else {
              return (notedate < today) ? true : false;
            }

          }
        }
      }

      );

    }
    else
      return;
  }
}