import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { UxComponent } from './components/ux/ux.component';
import { WebDevelopComponent } from './components/web-develop/web-develop.component';
import { PhotographyComponent } from './components/photography/photography.component';
import { GraphicDesignComponent } from './components/graphic-design/graphic-design.component';
import { VideoComponent } from './components/video/video.component';
import { IlustrationComponent } from './components/ilustration/ilustration.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { PageNotfoundComponent } from './components/page-notfound/page-notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    UxComponent,
    WebDevelopComponent,
    PhotographyComponent,
    GraphicDesignComponent,
    VideoComponent,
    IlustrationComponent,
    AboutMeComponent,
    PageNotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
