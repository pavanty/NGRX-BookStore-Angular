import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookmarkslistComponent } from './bookmarkslist.component';

describe('BookmarkslistComponent', () => {
  let component: BookmarkslistComponent;
  let fixture: ComponentFixture<BookmarkslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookmarkslistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookmarkslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
