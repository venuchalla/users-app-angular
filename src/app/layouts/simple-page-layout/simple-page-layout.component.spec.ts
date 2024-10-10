import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplePageLayoutComponent } from './simple-page-layout.component';

describe('SimplePageLayoutComponent', () => {
  let component: SimplePageLayoutComponent;
  let fixture: ComponentFixture<SimplePageLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimplePageLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SimplePageLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
