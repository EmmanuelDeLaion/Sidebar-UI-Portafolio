import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifsHomePageComponent } from './gifs-home-page.component';

describe('GifsHomePageComponent', () => {
  let component: GifsHomePageComponent;
  let fixture: ComponentFixture<GifsHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GifsHomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GifsHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
