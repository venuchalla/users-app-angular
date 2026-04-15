import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PortalModule } from '@angular/cdk/portal';
import { ModalpageComponent } from './modalpage.component';

@Component({
  standalone: true,
  template: '<p class="test-child">Hello from child</p>',
})
class TestChildComponent {}

describe('ModalpageComponent', () => {
  let component: ModalpageComponent;
  let fixture: ComponentFixture<ModalpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalpageComponent, PortalModule, TestChildComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    component.close();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open and close the modal', () => {
    component.show();
    fixture.detectChanges();
    expect(component.isOpen).toBeTrue();
    expect(document.body.querySelector('.modal-page')).toBeTruthy();

    component.close();
    fixture.detectChanges();
    expect(component.isOpen).toBeFalse();
    expect(document.body.querySelector('.modal-page')).toBeNull();
  });

  it('should render a child component via portal when opened', () => {
    component.openComponent(TestChildComponent, 'Child Modal');
    fixture.detectChanges();

    expect(component.isOpen).toBeTrue();
    expect(component.modalTitle).toBe('Child Modal');
    expect(document.body.querySelector('.modal-page')).toBeTruthy();
    expect(document.body.querySelector('.test-child')?.textContent).toContain('Hello from child');
  });
});
