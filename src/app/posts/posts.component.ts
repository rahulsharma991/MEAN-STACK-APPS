import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Post } from '../post.model';
import { NgForm } from '@angular/forms'
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

 
 @Output() postCreated = new EventEmitter<Post>();

  constructor() { }

  ngOnInit(): void {
  }
  postSubmit(postForm: NgForm) {
    if(postForm.invalid) {
      return
    }
      const postData: Post = {
        title: postForm.value.title,
        content: postForm.value.content
      }
      this.postCreated.emit(postData);
  }
}
