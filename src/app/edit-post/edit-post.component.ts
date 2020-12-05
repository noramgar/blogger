import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  currentPostId = 0;
  item = {}

  title: string
  headerImage: string
  content: string

  constructor(private postsService: PostsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.currentPostId = +this.route.snapshot.paramMap.get('postId')
    console.log('postID: ', this.currentPostId);

    this.postsService.GetPost(this.currentPostId).subscribe(post => { 
      this.title = post.title
      this.headerImage = post.headerImage
      this.content = post.content
      console.log(this.item) 
    })
  }

  onSave() {
    let post = {
      postId: this.currentPostId,
      title: this.title,
      headerImage: this.headerImage,
      content: this.content
    }

    this.postsService.UpdatePost(post).subscribe(res => {
      console.log('RESPONSE:  ', res)
      this.router.navigate(['/'])
    })
  }
}
