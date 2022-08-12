import { HeroesRoutingModule } from './heroes-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';

import { AddComponent } from './pages/add/add.component';
import { FindComponent } from './pages/find/find.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { HeroeCardComponent } from './components/heroe-card/heroe-card.component';





@NgModule({
  declarations: [
    AddComponent,
    FindComponent,
    HeroeComponent,
    HomeComponent,
    ListComponent,
    HeroeCardComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    HeroesRoutingModule,
    MaterialModule
  ]
})
export class HeroesModule { }
