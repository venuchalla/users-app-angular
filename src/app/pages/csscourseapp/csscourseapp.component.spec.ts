import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsscourseappComponent } from './csscourseapp.component';

describe('CsscourseappComponent', () => {
  let component: CsscourseappComponent;
  let fixture: ComponentFixture<CsscourseappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CsscourseappComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CsscourseappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
