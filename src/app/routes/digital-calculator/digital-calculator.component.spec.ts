import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalCalculatorComponent } from './digital-calculator.component';

describe('DigitalCalculatorComponent', () => {
  let component: DigitalCalculatorComponent;
  let fixture: ComponentFixture<DigitalCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
