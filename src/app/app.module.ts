import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { HeaderComponent } from './header/header.component';
import { NewPostComponentComponent } from './new-post-component/new-post-component.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PostsService } from './services/posts.service';
import { Routes, RouterModule } from '@angular/router';


const appRoutes: Routes =[
  { path: 'posts', component: PostComponent },
  { path: 'new', component: NewPostComponentComponent },
  { path: '', redirectTo: 'posts', pathMatch: 'full'},
  { path : '**', redirectTo: 'posts'}
];


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    HeaderComponent,
    NewPostComponentComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],

  providers: [PostsService],

  bootstrap: [AppComponent]
})
export class AppModule { }
