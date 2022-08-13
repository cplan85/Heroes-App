import { HeroesService } from './../../services/heroes.service';
import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.scss']
})
export class FindComponent implements OnInit {

  term:string;
  heroes: Heroe[];
  selectedHero: Heroe;

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
  }

  finding() {
    this.heroesService.getSuggestions(this.term).subscribe(heroes => {
      this.heroes = heroes
    })
  }

  optionSelected(event: MatAutocompleteSelectedEvent) {
    console.log(event)

    const hero: Heroe = event.option.value;

    this.term = hero.superhero;

    this.heroesService.getHeroe(hero.id!).subscribe(fullHero => {
      this.selectedHero = fullHero
    })
  }

}
