import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeessionClearComponent } from './seession-clear.component';

describe('SeessionClearComponent', () => {
  let component: SeessionClearComponent;
  let fixture: ComponentFixture<SeessionClearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeessionClearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeessionClearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
