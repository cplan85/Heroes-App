import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interface';

//false pipe will process on a change detection rather than a change in argument. In this case the Heroe argument is the same.
@Pipe({
  name: 'image',
  //pure: false
})
export class ImagePipe implements PipeTransform {

  transform(heroe: Heroe): string {

    console.log('Pipe image has processed')

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
