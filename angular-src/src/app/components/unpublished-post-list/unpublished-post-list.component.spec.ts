import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnpublishedPostListComponent } from './unpublished-post-list.component';

describe('UnpublishedPostListComponent', () => {
  let component: UnpublishedPostListComponent;
  let fixture: ComponentFixture<UnpublishedPostListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnpublishedPostListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnpublishedPostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
