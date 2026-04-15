import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalexampleComponent } from './portalexample.component';

describe('PortalexampleComponent', () => {
  let component: PortalexampleComponent;
  let fixture: ComponentFixture<PortalexampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortalexampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortalexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
