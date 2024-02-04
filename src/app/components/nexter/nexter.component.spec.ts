import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NexterComponent } from './nexter.component';

describe('NexterComponent', () => {
  let component: NexterComponent;
  let fixture: ComponentFixture<NexterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NexterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NexterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
