import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient, private userSvc: UserService) {}

  BASE_URL = 'https://unf.josecgomez.dev'

  createPost(post) {
    return this.http.post(`${this.BASE_URL}/Posts`, post, {
      headers: new HttpHeaders().set(
        'Authorization',
        `Bearer ${localStorage.getItem('token')}`
      ),
    });
  }

  Delete(postId): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/Posts/${postId}`, {
      headers: new HttpHeaders().set(
        'Authorization',
        `Bearer ${localStorage.getItem('token')}`
      ),
    });
  }

  GetPost(postId: number): Observable<any> {
    return this.http.get(`${this.BASE_URL}/Posts/${postId}`, {
      headers: new HttpHeaders().set(
        'Authorization',
        `Bearer ${localStorage.getItem('token')}`
      ),
    });
  }

  UpdatePost(post): Observable<any> {
    return this.http.patch(
      `${this.BASE_URL}/Posts/${post.postId}`,
      post,
      {
        headers: new HttpHeaders().set(
          'Authorization',
          `Bearer ${localStorage.getItem('token')}`
        ),
      }
    );
  }

  getAllPosts() {
    return this.http.get(`${this.BASE_URL}/Posts`)
  }
}
