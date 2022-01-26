import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { GraphicDesignComponent } from './components/graphic-design/graphic-design.component';
import { IlustrationComponent } from './components/ilustration/ilustration.component';
import { PageNotfoundComponent } from './components/page-notfound/page-notfound.component';
import { PhotographyComponent } from './components/photography/photography.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { UxComponent } from './components/ux/ux.component';
import { VideoComponent } from './components/video/video.component';
import { WebDevelopComponent } from './components/web-develop/web-develop.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'not-found', component:PageNotfoundComponent},
  {path:'home', component:SidebarComponent, children: [
    {path:'', redirectTo:'about-me', pathMatch:'full'},
    {path:'about-me', component: AboutMeComponent},
    {path:'ux-ui', component:UxComponent},
    {path:'web-develop', component:WebDevelopComponent},
    {path:'graphic-design', component:GraphicDesignComponent},
    {path:'video', component:VideoComponent},
    {path:'photography', component:PhotographyComponent},
    {path:'ilustration', component:IlustrationComponent}
  ]},
  {path:'**', redirectTo:'not-found', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
