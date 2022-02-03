import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarPeliculasComponent } from './navbar-peliculas.component';

describe('NavbarPeliculasComponent', () => {
  let component: NavbarPeliculasComponent;
  let fixture: ComponentFixture<NavbarPeliculasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarPeliculasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarPeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
