import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../models/post.interface';

@Pipe({
  name: 'filterPost'
})
export class FilterPostPipe implements PipeTransform {

  transform(postList: Post[], filter: string): Post[] {
    return postList.filter(post => post.name.toLowerCase().includes(filter) || post.description.toLowerCase().includes(filter));
  }

}
