import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostsService } from '../services/posts.service';
import { Router } from '@angular/router';
import { Post } from '../models/post.models';

@Component({
  selector: 'app-new-post-component',
  templateUrl: './new-post-component.component.html',
  styles: []
})
export class NewPostComponentComponent implements OnInit {

  postForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private postsService: PostsService,private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.postForm = this.formBuilder.group({
      name: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  onSavePost(){
    const name = this.postForm.get('name').value;
    const content = this.postForm.get('content').value;
    const loveIts = 0;
    const created_at = new Date();
    const newPost = new Post(name, content, loveIts, created_at);

    this.postsService.createNewPost(newPost);
    this.router.navigate(['/posts']);
  }
}
