import { Pipe, PipeTransform } from '@angular/core';
import { format } from 'date-fns'

@Pipe({
  name: 'cfDate'
})
export class CfDatePipe implements PipeTransform {

  transform(value: string | number | Date, frmt: string = 'MMM-DD-YYYY') {
    return format(value, frmt);
  }
}
