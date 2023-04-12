import { Injectable } from '@angular/core';
import { Post } from '../models/post.interface';
import { Observable, of, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  data = [
    {
      name: "Post title",
      description: 'description of the post example 1 ',
    },
    {
      name: "Post title 2",
      description: 'description of the post example 2 ',
    },
    {
      name: "Post title 3",
      description: 'description of the post example 3 ',
    },
    {
      name: "Post title 4",
      description: 'description of the post example 4 ',
    },
    {
      name: "Post title 5",
      description: 'description of the post example 5 ',
    },
    {
      name: "Post title 6",
      description: 'description of the post example 6 ',
    },


  ];

  constructor() { }

  getPostsApi(): Observable<any> {



    return of(this.data).pipe(
      delay(1500)
    )
  }

  addPost(post : Post) {
    this.data.push(post);
  }
}
