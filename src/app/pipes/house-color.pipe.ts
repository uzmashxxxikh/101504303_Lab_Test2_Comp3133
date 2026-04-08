import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'houseColor',
  standalone: true
})
export class HouseColorPipe implements PipeTransform {
  transform(house: string): string {
    switch (house) {
      case 'Gryffindor':
        return '#740001';
      case 'Slytherin':
        return '#1a472a';
      case 'Ravenclaw':
        return '#0e1a40';
      case 'Hufflepuff':
        return '#ecb939';
      default:
        return '#5a5a5a';
    }
  }
}
