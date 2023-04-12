import { createAction, props } from "@ngrx/store";
import { Post } from "src/app/models/post.interface";


export const addPost = createAction(
  '[Post List] Add Post',
  props<{post: Post}>()
);

export const retrievedPostList = createAction(
  '[Post List] Posts obtained sucessfully',
  props<{posts: ReadonlyArray<Post>}>()
);

export const deletePost = createAction(
  '[Post List] Delete Post',
  props<{post: Post}>()
);


