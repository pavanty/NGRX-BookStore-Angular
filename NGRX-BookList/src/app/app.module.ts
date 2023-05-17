import { CommentsDataService } from './entiy-data-services/comments-data.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingcomponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { EntityDataModule, EntityDataService } from '@ngrx/data';
import { environment } from 'src/environments/environment';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxStarsModule } from 'ngx-stars';
import { AngularToastModule } from 'angular-toasts';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BookmarkslistComponent } from './bookmarkslist/bookmarkslist.component';
import { entityConfig } from './store/bookmark-entity-metadata';

import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BookmarksDataService } from './entiy-data-services/bookmarks-data.service';
import { AuthenticationInterceptor } from './interceptors/authentication.interceptor';
import { CachingInterceptor } from './interceptors/caching.interceptor';
import { SignupDataService } from './entiy-data-services/signup-data.service';
import { NavbarComponent } from './navbar/navbar.component';
import { Error404Component } from './error404/error404.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { CommentsComponent } from './comments/comments.component';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';
import { UpdatecommentsComponent } from './updatecomments/updatecomments.component';
@NgModule({
  declarations: [
    AppComponent,
    routingcomponents,
    BookmarkslistComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    Error404Component,
    HomeComponent,
    FooterComponent,
    CommentsComponent,
    BookdetailsComponent,
    UpdatecommentsComponent,
  ],
  imports: [
    NgxStarRatingModule,
    NgbDropdownModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxStarsModule,
    AngularToastModule,
    NgxPaginationModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig),
  ],
  providers: [
    BookmarksDataService,
    SignupDataService,
    CommentsDataService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi: true,
    },
    { provide: HTTP_INTERCEPTORS, useClass: CachingInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(
    entityDataService: EntityDataService,
    BookmarksDataService: BookmarksDataService,
    SignupDataService: SignupDataService,
    CommentsDataService: CommentsDataService
  ) {
    entityDataService.registerService('BookMark', BookmarksDataService);
    entityDataService.registerService('Signup', SignupDataService);
    entityDataService.registerService('Comment', CommentsDataService);
  }
}
