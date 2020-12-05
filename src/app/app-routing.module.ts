import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatePostComponent } from './create-post/create-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewUserComponent } from './new-user/new-user.component';
import { AuthGuardService } from './services/auth/auth-guard.service';
import { ViewPostsComponent } from './view-posts/view-posts.component';

const routes: Routes = [
  { path: '', component: ViewPostsComponent, canActivate: [AuthGuardService] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuardService] },
  { path: 'new-user', component: NewUserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'create-post', component: CreatePostComponent, canActivate: [AuthGuardService] },
  { path: 'posts', component: ViewPostsComponent },
  { path: 'edit-post/:postId', component: EditPostComponent, canActivate: [AuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
