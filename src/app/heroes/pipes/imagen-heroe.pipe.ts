import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroe.interface';

@Pipe({
  name: 'imagenHeroe'
})
export class ImagenHeroePipe implements PipeTransform {

  transform(heroe: Heroe): string {
    const path = `assets/heroes/${heroe.id}.jpg`;
    return path;
  }

}
