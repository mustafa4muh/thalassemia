import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogiNComponent } from './logi-n.component';

describe('LogiNComponent', () => {
  let component: LogiNComponent;
  let fixture: ComponentFixture<LogiNComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogiNComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogiNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
