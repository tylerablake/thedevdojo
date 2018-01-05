import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListByTagComponent } from './post-list-by-tag.component';

describe('PostListByTagComponent', () => {
  let component: PostListByTagComponent;
  let fixture: ComponentFixture<PostListByTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostListByTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListByTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
