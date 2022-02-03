import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculasContainerComponent } from './peliculas-container.component';

describe('PeliculasContainerComponent', () => {
  let component: PeliculasContainerComponent;
  let fixture: ComponentFixture<PeliculasContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeliculasContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculasContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
