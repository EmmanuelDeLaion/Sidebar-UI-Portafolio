import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculasBuscarPageComponent } from './peliculas-buscar-page.component';

describe('PeliculasBuscarPageComponent', () => {
  let component: PeliculasBuscarPageComponent;
  let fixture: ComponentFixture<PeliculasBuscarPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeliculasBuscarPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculasBuscarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
