import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecommentsComponent } from './updatecomments.component';

describe('UpdatecommentsComponent', () => {
  let component: UpdatecommentsComponent;
  let fixture: ComponentFixture<UpdatecommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatecommentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatecommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
