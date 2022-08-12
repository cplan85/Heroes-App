import { HeroesService } from './../../services/heroes.service';
import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor(private heroesService: HeroesService) { }

  //json-server --watch db.json
  ngOnInit(): void {

    this.heroesService.getHeroes().subscribe(resp => {
      this.heroes = resp;
    })
  }

}
