import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  
  userId: string; 
  firstName: string;
  lastName: string;
  emailAddress: string;
  password: string;
  errorMessage: string;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {}

  onSignupSubmit() {
    let credentials = {
      userId: this.userId,
      firstName: this.firstName,
      lastName: this.lastName,
      emailAddress: this.emailAddress,
      password: this.password
    }
    this.auth.signup(credentials)
    .subscribe(
      response => this.auth.finishSignup(),
      error => this.errorMessage = 'Error!'
    )
  }

}
