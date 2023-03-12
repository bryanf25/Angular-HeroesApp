import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {

  constructor(
    private router: Router,
    private authservice: AuthService) { }

  login() {
    this.authservice.login().subscribe(response => {
      if (response.id) {
        this.router.navigate(['./heroes'])
      }
    }
    )


  }

}
