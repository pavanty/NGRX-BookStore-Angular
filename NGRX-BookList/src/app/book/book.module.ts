import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxStarsModule } from 'ngx-stars';
import { BooklistsComponent } from './booklists/booklists.component';
import { BooksResolver } from './books.resolver';
import { FilterPipe } from './filter.pipe';
import {
  EntityDataModule,
  EntityDataService,
  EntityDefinitionService,
} from '@ngrx/data';
import { BookDataService } from './book-data.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { BookformComponent } from './bookform/bookform.component';
import { entityMetadata } from './store/book-entity-metadata';

const routes: Routes = [
  {
    path: '',
    component: BooklistsComponent,
    resolve: { books: BooksResolver },
  },
];
@NgModule({
  declarations: [BookformComponent, FilterPipe, BooklistsComponent],
  imports: [
    NgxStarsModule,
    FormsModule,
    NgxPaginationModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes),
  ],
  providers: [BooksResolver, BookDataService],
})
export class BookModule {
  constructor(
    eds: EntityDefinitionService,
    entityDataService: EntityDataService,
    BookDataService: BookDataService
  ) {
    eds.registerMetadataMap(entityMetadata);
    entityDataService.registerService('Book', BookDataService);
  }
}
