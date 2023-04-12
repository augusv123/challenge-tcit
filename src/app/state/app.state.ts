import { ActionReducerMap } from "@ngrx/store";
import { Post } from "../models/post.interface";
import { postsReducer } from "./reducers/posts.reducer";

export interface AppState {
  posts : ReadonlyArray<Post>;
}

export const ROOT_REDUCERS : ActionReducerMap<AppState> = {
  posts : postsReducer
}
