import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyPageLayoutComponent } from './empty-page-layout.component';

describe('EmptyPageLayoutComponent', () => {
  let component: EmptyPageLayoutComponent;
  let fixture: ComponentFixture<EmptyPageLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmptyPageLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmptyPageLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
