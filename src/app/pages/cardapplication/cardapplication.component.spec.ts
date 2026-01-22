import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardapplicationComponent } from './cardapplication.component';

describe('CardapplicationComponent', () => {
  let component: CardapplicationComponent;
  let fixture: ComponentFixture<CardapplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardapplicationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardapplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
