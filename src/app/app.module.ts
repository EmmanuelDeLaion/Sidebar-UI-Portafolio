// MODULOS
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

// RUTAS
import { RUTAS_PRINCIPALES } from './app.routes';

// APP COMPONENT
import { AppComponent } from './app.component';

// SIDEBAR
import { SidebarComponent } from './modules/principal-app/sidebar/sidebar.component';

// PELICULAS
import { PeliculasHomePageComponent } from './modules/peliculas-app/peliculas-home-page/peliculas-home-page.component';
import { PeliculasBuscarPageComponent } from './modules/peliculas-app/peliculas-buscar-page/peliculas-buscar-page.component';
import { PeliculasPeliculaPageComponent } from './modules/peliculas-app/peliculas-pelicula-page/peliculas-pelicula-page.component';
import { GifsHomePageComponent } from './modules/gifs-app/gifs-home-page/gifs-home-page.component';
import { GifsGifPageComponent } from './modules/gifs-app/gifs-gif-page/gifs-gif-page.component';
import { EmpleadosHomePageComponent } from './modules/empleados-app/empleados-home-page/empleados-home-page.component';
import { EmpleadosEmpleadoPageComponent } from './modules/empleados-app/empleados-empleado-page/empleados-empleado-page.component';
import { PeliculasContainerComponent } from './modules/peliculas-app/peliculas-container/peliculas-container.component';
import { ComponentsModule } from './components/components.module';





@NgModule({
  declarations: [
    AppComponent,
    PeliculasHomePageComponent,
    PeliculasBuscarPageComponent,
    PeliculasPeliculaPageComponent,
    SidebarComponent,
    GifsHomePageComponent,
    GifsGifPageComponent,
    EmpleadosHomePageComponent,
    EmpleadosEmpleadoPageComponent,
    PeliculasContainerComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(RUTAS_PRINCIPALES, { useHash:true}),
    HttpClientModule,
    ComponentsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
