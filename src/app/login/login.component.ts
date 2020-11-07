import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage: string;
  userId: string;
  password: string;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {}

  onLoginSubmit(userId, password) {
    this.auth.login(userId, password)
      .subscribe(
        response => {
          if (response.token) {
            this.auth.finishAuthentication(response.token)
            this.errorMessage = '';
          }
        },
        error => this.errorMessage = error.error.messsage
      );
  }
}
