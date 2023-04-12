import { createReducer, on } from "@ngrx/store";
import { Post } from "src/app/models/post.interface";
import { addPost, deletePost, retrievedPostList } from "../actions/post.actions";


export const initialState: ReadonlyArray<Post> = [];

export const postsReducer = createReducer(
  initialState,
  on(addPost,(currentState,{post}) => {
    return [ ...[post], ...currentState]
  }),
  on(retrievedPostList,(currentState,{posts}) => {
    return [...posts]
  }),
  on(deletePost,(currentState,{post}) => {
    return currentState.filter( p =>  {
      return p.name !== post.name;
  });
  }),
)
