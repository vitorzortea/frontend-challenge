import { Component, OnInit } from '@angular/core';
import { AuthService, FacebookLoginProvider, SocialUser } from 'angularx-social-login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl']
})
export class LoginComponent implements OnInit {
  loading = false;
  loggedIn: boolean;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.isLogin();
  }
  signInWithFB(): void {
    this.loading = true;
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(
      (res) => {
        localStorage.setItem('user', JSON.stringify(res));
        this.isLogin();
      },
      (error) => this.loading = false,
    );
  }

  isLogin() {
    if (localStorage.getItem('user')) {
      this.router.navigate(['/panel']);
    }
  }



}
