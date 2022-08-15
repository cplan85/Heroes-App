import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router: Router,
    private authService: AuthService) { }

  login() {

    this.authService.login().subscribe( resp => {
      console.log(resp);

      if(resp.id) {
        this.router.navigate(['./heroes'])
      }
    })
  }

  enterWithoutLogin(){
    this.authService.logout();
    this.router.navigate(['/heroes']);
  }



}
