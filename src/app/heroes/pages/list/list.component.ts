import { HeroesService } from './../../services/heroes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {

    this.heroesService.getHeroes().subscribe(resp => console.log(resp))
  }

}
