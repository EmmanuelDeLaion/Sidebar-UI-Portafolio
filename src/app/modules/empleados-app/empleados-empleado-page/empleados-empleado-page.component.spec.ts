import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadosEmpleadoPageComponent } from './empleados-empleado-page.component';

describe('EmpleadosEmpleadoPageComponent', () => {
  let component: EmpleadosEmpleadoPageComponent;
  let fixture: ComponentFixture<EmpleadosEmpleadoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleadosEmpleadoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadosEmpleadoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
