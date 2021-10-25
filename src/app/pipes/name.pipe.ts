import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Name'
})
export class NamePipe implements PipeTransform {

  transform(value: string): string {
    let words = value.split(' ');
    let Name: string = "";
    words.forEach(w => {
      Name = Name + w[0].toUpperCase() + w.slice(1, w.length) + " ";
    })

    return Name;
  }

}
