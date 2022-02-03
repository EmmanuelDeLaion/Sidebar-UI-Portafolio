import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PeliculasService } from './services/peliculas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  myElementScript: HTMLScriptElement;
  title = 'DASHBOARD-UI';

  constructor(private peliculasService: PeliculasService){


    this.myElementScript = document.createElement("script");
    this.myElementScript.src = "/assets/js/dashboard-home.js";
    document.body.appendChild(this.myElementScript);


    this.peliculasService.getCartelera().subscribe(
      res => {
        console.log(res);
      }
    )



  }

  ngOnInit(): void {

  }


}
