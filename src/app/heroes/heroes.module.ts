import { HeroesRoutingModule } from './heroes-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddComponent } from './pages/add/add.component';
import { FindComponent } from './pages/find/find.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';




@NgModule({
  declarations: [
    AddComponent,
    FindComponent,
    HeroeComponent,
    HomeComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
