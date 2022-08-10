import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    //THIS IS WHERE YOU CAN LAZY LOAD THE MODULE IN THE SEPARATE MODULE FOLDER
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule)
  },
  {
    path: '404',
    component: ErrorPageComponent
  },
  {
    path: '**',
   // component: ErrorPageComponent
   redirectTo: '404'
  }
]



@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
