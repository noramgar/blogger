import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage: string;
  userId: string;
  password: string;
  res: string;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {}

  onLoginSubmit(userId, password) {
    this.auth.login(userId, password)
      .subscribe(
        response => {
          this.res = response;
          if (response.token) {
            this.auth.finishAuthentication(response.token)
          } else {
            this.errorMessage = 'ERROR!';
          }
        },
        error => this.errorMessage = 'ERROR!'
      );
  }

}
