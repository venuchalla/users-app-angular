import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadiooptionselectorComponent } from './radiooptionselector.component';

describe('RadiooptionselectorComponent', () => {
  let component: RadiooptionselectorComponent;
  let fixture: ComponentFixture<RadiooptionselectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadiooptionselectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RadiooptionselectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
