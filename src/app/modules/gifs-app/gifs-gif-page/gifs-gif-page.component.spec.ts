import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifsGifPageComponent } from './gifs-gif-page.component';

describe('GifsGifPageComponent', () => {
  let component: GifsGifPageComponent;
  let fixture: ComponentFixture<GifsGifPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GifsGifPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GifsGifPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
