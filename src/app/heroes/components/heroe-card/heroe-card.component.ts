import { Heroe } from './../../interfaces/heroes.interface';
import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
  styleUrls: ['./heroe-card.component.scss']
})
export class HeroeCardComponent implements OnInit {

  heroId: string;

  constructor() { }

  @Input() heroe: Heroe;

  ngOnInit(): void {

    
  }

}
