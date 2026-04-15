import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputWithTooltipComponent } from './input-with-tooltip.component';

describe('InputWithTooltipComponent', () => {
  let component: InputWithTooltipComponent;
  let fixture: ComponentFixture<InputWithTooltipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputWithTooltipComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputWithTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});