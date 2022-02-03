import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculasPeliculaPageComponent } from './peliculas-pelicula-page.component';

describe('PeliculasPeliculaPageComponent', () => {
  let component: PeliculasPeliculaPageComponent;
  let fixture: ComponentFixture<PeliculasPeliculaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeliculasPeliculaPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculasPeliculaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
