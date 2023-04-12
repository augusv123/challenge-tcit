import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PostService } from './services/post.service';
import { addPost, deletePost, retrievedPostList } from './state/actions/post.actions';
import { Post } from './models/post.interface';
import { Observable } from 'rxjs';
import { selectPosts } from './state/selectors/posts.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'challenge-tcit';
  postList$ : Observable<any> = new Observable();
  name = '';
  description = '';
  filterInput = '';

  constructor(private _store: Store, private _postService: PostService) {

    this.postList$ = this._store.select(selectPosts)
  }
  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this._postService.getPostsApi().subscribe(
      (res) => {
        this._store.dispatch(retrievedPostList({ posts: res }))
      }
    )
  }

}
