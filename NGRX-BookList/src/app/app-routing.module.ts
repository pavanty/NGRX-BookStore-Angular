import { UpdatecommentsComponent } from './updatecomments/updatecomments.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmarkslistComponent } from './bookmarkslist/bookmarkslist.component';
import { BooklistsComponent } from './book/booklists/booklists.component';
import { BookformComponent } from './book/bookform/bookform.component';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { Error404Component } from './error404/error404.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'booklist',
    component: BooklistsComponent,
    loadChildren: () => import('./book/book.module').then((m) => m.BookModule),
  },
  {
    path: 'Bookdetail/:id',
    component: BookdetailsComponent,
  },
  { path: 'BookForm', component: BookformComponent, canActivate: [AuthGuard] },
  {
    path: 'Bookmarkslist',
    component: BookmarkslistComponent,
    canActivate: [AuthGuard],
  },
  { path: 'error404', component: Error404Component },
  {
    path: 'Updatecomment/:id',
    component: UpdatecommentsComponent,
    canActivate: [AuthGuard],
  },
  { path: '**', component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingcomponents = [
  UpdatecommentsComponent,
  HomeComponent,
  BookmarkslistComponent,
  SignupComponent,
  LoginComponent,
  Error404Component,
];
