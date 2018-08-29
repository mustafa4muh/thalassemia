import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboUtComponent } from './abo-ut.component';

describe('AboUtComponent', () => {
  let component: AboUtComponent;
  let fixture: ComponentFixture<AboUtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboUtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboUtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
