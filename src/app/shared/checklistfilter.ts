import { Pipe, PipeTransform } from '@angular/core';
import 'rxjs/add/operator/map';

@Pipe({name: 'reverse'})
export class ReverseCheckList implements PipeTransform {
  transform(value: any[]): any[] {
      if(value){
    return value.reverse();
    }
    else
    return ;
  }
}