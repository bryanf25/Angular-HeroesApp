import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Heroe } from '../interfaces/heroe.interface';

@Pipe({
  name: 'imagenHeroe'
})
export class ImagenHeroePipe implements PipeTransform {

  transform(heroe: Heroe): string {
  const path = (!heroe.alt_img) ? `assets/heroes/${heroe.id}.jpg` : heroe.alt_img;
   return (!heroe.id ) ? environment.imageDefaultUrl : path;
  }

}
