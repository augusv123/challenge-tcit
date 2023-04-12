import { createFeatureSelector } from "@ngrx/store";
import { Post } from "src/app/models/post.interface";


export const selectPosts = createFeatureSelector<ReadonlyArray<Post>>('posts');

