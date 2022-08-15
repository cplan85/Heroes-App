import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {

  constructor(private authService: AuthService, private router: Router) {}
   canActivate(
     route: ActivatedRouteSnapshot,
     state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
     

      return this.authService.verifyAuthentication()
      .pipe(
        tap(isVerified => {
          if(!isVerified) {
            this.router.navigate(['./auth/login'])
          }
        })
      )
   


      // if(this.authService.auth.id) {
      //   return true;
      // }
      // console.log('Blocked by the AuthGuard - CanActivate');
      // return false;
   }
  //can load only restricts loading of module. If module is already loaded, you can access routes even if you don't meet the conditions of the guard.
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean > | boolean  {

      return this.authService.verifyAuthentication()
      .pipe(
        tap(isVerified => {
          if(!isVerified) {
            this.router.navigate(['./auth/login'])
          }
        })
      )
  
      // if(this.authService.auth.id) {
      //   return true;
      // }
      // console.log('Blocked by the AuthGuard - Can Load');
      // return false;
  }
}
