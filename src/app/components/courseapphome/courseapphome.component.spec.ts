import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseapphomeComponent } from './courseapphome.component';

describe('CourseapphomeComponent', () => {
  let component: CourseapphomeComponent;
  let fixture: ComponentFixture<CourseapphomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseapphomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourseapphomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
