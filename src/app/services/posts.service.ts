import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from '../models/post.models';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  posts = [
      {
        name : 'Mon premier post',
        content : 'aaaaaaaaaaaaaaaaaaaaaaaa',
        loveIts : 0,
        created_at : new Date()
      },
      {
        name : 'Mon deuxieme post',
        content : 'bbbbbbbbbbbbbbbbbbbbb',
        loveIts : 0,
        created_at : new Date()
      },
      {
        name : 'Encore un post',
        content : 'ccccccccccccccccccccccccc',
        loveIts : 0,
        created_at : new Date()
      }
    ];

    postsSubject = new Subject<Post[]>();
  constructor() { }

  getPosts(){//Je ne sais même pas si je l'utilise
    this.emitPosts();
    return this.posts;
  }


  emitPosts(){
    this.postsSubject.next(this.posts);
  }

  getLovesIt(index: number){
    return this.posts[index].loveIts;
  }

  loveIts(index: number){
    this.posts[index].loveIts = this.posts[index].loveIts + 1;
    this.emitPosts();
  }

  dontLoveIts(index: number){
    this.posts[index].loveIts = this.posts[index].loveIts - 1;
    this.emitPosts();
  }

  createNewPost(newPost: Post){
    this.posts.push(newPost);
    this.emitPosts();
  }

  removePost(index: number) {
    this.posts.splice(index,1);
    this.emitPosts();
}

}
