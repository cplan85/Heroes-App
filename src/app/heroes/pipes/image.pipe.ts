import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interface';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(heroe: Heroe): string {

    console.log(heroe.id, "and", heroe.alt_img)

    if(!heroe.id && heroe.alt_img==='') {
      return 'assets/no-image.png'
      
    } else if (heroe.alt_img) {
      return heroe.alt_img
    } else if (heroe.id && heroe.alt_img ==='') {
      return 'assets/no-image.png'
    }
    
    else {
      return `assets/heroes/${heroe.id}.jpg`
    }
  }

}
