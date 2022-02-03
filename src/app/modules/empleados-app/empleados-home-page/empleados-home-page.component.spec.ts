import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadosHomePageComponent } from './empleados-home-page.component';

describe('EmpleadosHomePageComponent', () => {
  let component: EmpleadosHomePageComponent;
  let fixture: ComponentFixture<EmpleadosHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleadosHomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadosHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
