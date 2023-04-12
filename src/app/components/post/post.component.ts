import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post.interface';
import { deletePost } from 'src/app/state/actions/post.actions';
import { selectPosts } from 'src/app/state/selectors/posts.selector';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  postList$ : Observable<any> = new Observable();
  filter = '';
  constructor(private _store: Store) {

    this.postList$ = this._store.select(selectPosts)

  }

  ngOnInit(): void {
  }

  deletePost(post : Post){
    this._store.dispatch(deletePost({post}))
  }



}
