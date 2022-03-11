import { NgModule,  CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarPeliculasComponent } from './navbar-peliculas/navbar-peliculas.component';
import { SwiperPeliculasComponent } from './swiper-peliculas/swiper-peliculas.component';
import { PeliculasPosterGridComponent } from './peliculas-poster-grid/peliculas-poster-grid.component';

import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbModule }
from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    NavbarPeliculasComponent,
    SwiperPeliculasComponent,
    PeliculasPosterGridComponent
  ],
  exports:[
    NavbarPeliculasComponent,
    SwiperPeliculasComponent,
    PeliculasPosterGridComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule

  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]

})
export class ComponentsModule { }
