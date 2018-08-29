import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetTingComponent } from './set-ting.component';

describe('SetTingComponent', () => {
  let component: SetTingComponent;
  let fixture: ComponentFixture<SetTingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetTingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetTingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
