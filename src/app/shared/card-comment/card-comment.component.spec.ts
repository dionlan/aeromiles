import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCommentComponent } from './card-comment.component';

describe('CardCommentComponent', () => {
  let component: CardCommentComponent;
  let fixture: ComponentFixture<CardCommentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardCommentComponent]
    });
    fixture = TestBed.createComponent(CardCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
