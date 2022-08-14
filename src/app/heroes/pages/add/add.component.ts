import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from './../../services/heroes.service';
import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';
import { Publisher } from '../../interfaces/heroes.interface';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC-Comics',
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel-Comics',
    }
  ];

  hero: Heroe = {
    superhero:        '',
    publisher:       Publisher.DCComics,
    alter_ego:       '',
    first_appearance: '',
    characters:       '',
    alt_img:          '',
  }

  constructor(private heroeService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    if(!this.router.url.includes('edit')) {
      return;
    }

    this.activatedRoute.params
    .pipe(switchMap( ({id}) => this.heroeService.getHeroe(id)

    ))
    
    .subscribe(hero => this.hero = hero)
  }

  save(): void {
    console.log(this.hero.id, "from add component")
    if(this.hero.superhero.trim().length === 0) {
      return;
    }
   
    if(this.hero.id) {
      this.heroeService.editHeroe(this.hero, this.hero.id).subscribe(resp=> {
        console.log('Updated',resp)
      })
    } else {

       this.heroeService.addHeroe(this.hero).subscribe(hero => {
         console.log('Response', hero)
         this.router.navigate(['/heroes/edit', hero.id])
       })

    }
   
    
  }

  deleteHero():void {

    this.activatedRoute.params
    .pipe(switchMap( ({id}) => this.heroeService.deleteHeroe(id)

    ))
    
    .subscribe(resp => 
      
    {  this.router.navigate(['/heroes'])
      console.log(resp)
      })
  }

}
