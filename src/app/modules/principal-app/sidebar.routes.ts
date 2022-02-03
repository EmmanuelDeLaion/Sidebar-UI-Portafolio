

import { Routes } from '@angular/router';
import { EmpleadosHomePageComponent } from '../empleados-app/empleados-home-page/empleados-home-page.component';
import { GifsHomePageComponent } from '../gifs-app/gifs-home-page/gifs-home-page.component';
import { RUTAS_PELICULAS } from '../peliculas-app/peliculas.routes';


export const RUTAS_SIDEBAR: Routes = [

  // HOME
  {
    path:'',
    redirectTo:'aplicacion-peliculas',
    pathMatch:'full'
  },


  {
    path:'aplicacion-peliculas',
    children: RUTAS_PELICULAS
  },

  {
    path:'gifs',
    component: GifsHomePageComponent
  },

  {
    path:'empleados',
    component:EmpleadosHomePageComponent
  }

];
