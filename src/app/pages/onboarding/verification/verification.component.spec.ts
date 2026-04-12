import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifiationComponent } from './verification.component';

describe('VerifiationComponent', () => {
  let component: VerifiationComponent;
  let fixture: ComponentFixture<VerifiationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerifiationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifiationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
