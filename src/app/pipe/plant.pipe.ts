import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'plant'
})
export class PlantPipe implements PipeTransform {

  transform(value, position) {
    if (value) {
      return value.filter(element => {
        if (element.position == position) {
           return element
        }
      });
    }
  }

}
