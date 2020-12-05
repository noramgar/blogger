import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {

  @Input() item;
  @Output() deleteClicked = new EventEmitter<string>()
  openConfirm = false

  constructor(public userService: UserService, private router: Router) { }

  ngOnInit(): void { }

  onDelete() {
    this.deleteClicked.emit(this.item.postId)
  }
}
