import { Component,Input, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../models/post.models';
import { Subscription } from 'rxjs';
import { PostsService } from '../services/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styles: []
})
export class PostComponent implements OnInit, OnDestroy {

  posts: Post[];
  postsSubscription: Subscription;
  constructor(private postsService: PostsService, private router: Router) { }

  ngOnInit() {
    this.postsSubscription = this.postsService.postsSubject.subscribe(
      (books: Post[]) => {
        this.posts = books;
      }
    );
    this.postsService.getPosts();
    this.postsService.emitPosts();
  }
  getColor(index: number){
    if(this.postsService.getLovesIt(index) > 0){
      return 'green';
    } else if(this.postsService.getLovesIt(index) < 0){
      return 'red';
    }
  }

  onRemove(index: number){
    this.postsService.removePost(index);
  }

  onLoveIts(index: number){
    this.postsService.loveIts(index);
  }

  onDontLoveIts(index: number){
    this.postsService.dontLoveIts(index);
  }

  ngOnDestroy(){
    this.postsSubscription.unsubscribe();
  }
}
