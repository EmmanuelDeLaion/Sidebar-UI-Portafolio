

import { Routes } from '@angular/router';
import { EmpleadosHomePageComponent } from '../empleados-app/empleados-home-page/empleados-home-page.component';
import { GifsHomePageComponent } from '../gifs-app/gifs-home-page/gifs-home-page.component';
import { PeliculasHomePageComponent } from '../peliculas-app/peliculas-home-page/peliculas-home-page.component';
import { PeliculasBuscarPageComponent } from './peliculas-buscar-page/peliculas-buscar-page.component';
import { PeliculasContainerComponent } from './peliculas-container/peliculas-container.component';
import { PeliculasPeliculaPageComponent } from './peliculas-pelicula-page/peliculas-pelicula-page.component';


export const RUTAS_PELICULAS: Routes = [


  {
    path:'',
    redirectTo:'inicio-peliculas',
    pathMatch:'full'
  },


  {
    path:'inicio-peliculas',
    component: PeliculasContainerComponent,
    children: [
      {
        path:'',
        component:PeliculasHomePageComponent

      },

      {
        path: 'peliculas-home',
        component: PeliculasHomePageComponent
      },

      {
        path:'peliculas-buscar',
        component: PeliculasBuscarPageComponent
      },

      {
        path:'peliculas-pelicula',
        component:PeliculasPeliculaPageComponent
      }
    ]
  },



];
