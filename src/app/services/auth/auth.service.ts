import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  API_URL = 'https://unf.josecgomez.dev'

  constructor(private http: HttpClient, private router: Router) { }

  login(userId, password): any {
    return this.http.get(`${this.API_URL}/Users/${userId}/${password}`);
  }

  signup(credentials): Observable<Object> {
    return this.http.post(`${this.API_URL}/Users`, credentials);
  }

  finishAuthentication(token): void {
    localStorage.setItem('token', token);
    this.router.navigate(['home']);
  }

  finishSignup():void {
    this.router.navigate(['login']);
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
}
