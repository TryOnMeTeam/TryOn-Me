import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserImageThreedComponent } from './user-image-threed.component';

describe('UserImageThreedComponent', () => {
  let component: UserImageThreedComponent;
  let fixture: ComponentFixture<UserImageThreedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserImageThreedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserImageThreedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
