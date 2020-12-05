import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  BASE_URL = 'https://unf.josecgomez.dev'

  currentUser() {
    const token = localStorage.getItem('token')
    const decoded: any = jwt_decode(token);
    const userId = decoded.UserData.userId  
    return userId
  }
}
