import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PostsComponent } from './components/posts/posts/posts.component';
import { CustomFieldsComponent } from './components/custom-fields/custom-fields/custom-fields.component';
import { PostDetailComponent } from './components/posts/post-detail/post-detail.component';
import { CategoriesComponent } from './components/categories/categories/categories.component';


const routes: Routes = [
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: 'posts', component: PostsComponent },
  { path: 'posts/:_id', component: PostDetailComponent },
  { path: 'category/:_id', component: CategoriesComponent },
  { path: 'custom-fields', component: CustomFieldsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
