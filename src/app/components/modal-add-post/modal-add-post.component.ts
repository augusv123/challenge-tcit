import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/models/post.interface';
import { addPost } from 'src/app/state/actions/post.actions';

@Component({
  selector: 'app-modal-add-post',
  templateUrl: './modal-add-post.component.html',
  styleUrls: ['./modal-add-post.component.css']
})
export class ModalAddPostComponent implements OnInit {
  name = '';
  description = '';
  show = false;

  @Input() visible: boolean = false;


  constructor(private _store : Store) { }

  ngOnInit(): void {
  }

  toggleShow() {
    this.show = !this.show;
  }


  addPost(){
    const post : Post = {
      name : this.name,
      description : this.description
    }
    this._store.dispatch(addPost({post}))
    this.resetFields();
    this.show = false;
  }

  resetFields(){
    this.name = '';
    this.description = '';
  }



}
