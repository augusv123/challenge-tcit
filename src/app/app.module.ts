import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { PostComponent } from './components/post/post.component';
import { EffectsModule } from '@ngrx/effects';
import { ROOT_REDUCERS } from './state/app.state';
import { FormsModule } from '@angular/forms';
import { FilterPostPipe } from './helpers/filter-post.pipe';
import { ModalAddPostComponent } from './components/modal-add-post/modal-add-post.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    FilterPostPipe,
    ModalAddPostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    EffectsModule.forRoot([]),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
