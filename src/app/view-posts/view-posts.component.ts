import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-view-posts',
  templateUrl: './view-posts.component.html',
  styleUrls: ['./view-posts.component.css']
})
export class ViewPostsComponent implements OnInit {

  posts: any = []

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.loadPosts()
  }

  loadPosts() {
    this.postsService.getAllPosts().subscribe((data: any) => {
      let updatedPosts = data.map(post => {
        let newPost = post
        newPost.createdDate = new Date(post.createdDate)
        newPost.lastUpdated = new Date(post.lastUpdated)
        return newPost      
      })
      this.posts = updatedPosts.reverse()
      console.log('result: ', data)
    })
  }

  deletePost(postId) {
    this.posts = this.posts.filter(post => {
      return post.postId !== postId
    })
  }
}
