
import { PageNotfoundComponent } from "./auxiliar/page-notfound/page-notfound.component";
import { Routes } from '@angular/router';
import { SidebarComponent } from './modules/principal-app/sidebar/sidebar.component';
import { RUTAS_SIDEBAR } from "./modules/principal-app/sidebar.routes";

export const RUTAS_PRINCIPALES: Routes = [

  // HOME
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'home',
    component: SidebarComponent,
    children: RUTAS_SIDEBAR
  },

  // NOT FOUND
  {
    path:'not-found',
    component:PageNotfoundComponent
  },


  {
    path:'**',
    redirectTo:'not-found',
    pathMatch:'full'
  }


];

