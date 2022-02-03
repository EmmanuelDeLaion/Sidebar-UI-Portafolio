import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarPeliculasComponent } from './navbar-peliculas/navbar-peliculas.component';



@NgModule({
  declarations: [
    NavbarPeliculasComponent
  ],
  exports:[
    NavbarPeliculasComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
