import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculasHomePageComponent } from './peliculas-home-page.component';

describe('PeliculasHomePageComponent', () => {
  let component: PeliculasHomePageComponent;
  let fixture: ComponentFixture<PeliculasHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeliculasHomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculasHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
