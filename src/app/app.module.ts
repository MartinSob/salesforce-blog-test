import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BlogListComponent,
    BlogDetailComponent,
    BlogEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: BlogListComponent },
      { path: 'blog/edit/:id', component: BlogEditComponent, data: { isEdit: true } },
      { path: 'blog/create', component: BlogEditComponent, data: { isEdit: false } },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
