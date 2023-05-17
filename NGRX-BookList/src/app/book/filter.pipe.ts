import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any[], filtername: string, propname: string): any[] {
    if (!value) return value;
    if (!filtername) return value;
    if (filtername === '') return value;
    filtername = filtername.toLowerCase();
    return value.filter((item) => {
      return item[propname].toLowerCase().includes(filtername);
    });
  }
}
