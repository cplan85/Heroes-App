import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss']
})
export class HeroeComponent implements OnInit {

  heroe!: Heroe;

  constructor(private activatedRoute:ActivatedRoute,
    private heroesService: HeroesService,
    private router: Router) { }

    return(){
      this.router.navigate(['/heroes/list'])
    }

  ngOnInit(): void {

    this.activatedRoute.params
    .pipe(
      switchMap(({id}) => 
        this.heroesService.getHeroe(id)
      )
    )
    .subscribe(hero => {
      // console.log(params['id'], "params"); // { orderby: "price" }

      // this.heroesService.getHeroe(params['id']).subscribe(resp => {
      //   this.heroe = resp;
      //   console.log(resp)
      // })
      this.heroe = hero
     });

    }

}
