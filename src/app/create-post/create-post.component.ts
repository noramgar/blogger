import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  title: string
  headerImage: string
  content: string

  constructor(private postsService: PostsService, private router: Router) { }

  ngOnInit(): void {
  }

  onSave() {
    let post = {
      title: this.title,
      content: this.content,
      headerImage: this.headerImage
    }
    this.postsService.createPost(post).subscribe(result => {
      this.router.navigate(['posts'])     
    })
  }
}
