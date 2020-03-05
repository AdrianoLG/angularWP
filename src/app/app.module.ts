import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PostsComponent } from './components/posts/posts/posts.component';
import { CustomFieldsComponent } from './components/custom-fields/custom-fields/custom-fields.component';
import { PostDetailComponent } from './components/posts/post-detail/post-detail.component';
import { CategoriesComponent } from './components/categories/categories/categories.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    CustomFieldsComponent,
    PostDetailComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
