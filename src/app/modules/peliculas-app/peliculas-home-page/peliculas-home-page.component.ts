
import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/cartelera-response';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-peliculas-home-page',
  templateUrl: './peliculas-home-page.component.html',
  styleUrls: ['./peliculas-home-page.component.scss']
})
export class PeliculasHomePageComponent implements OnInit {

  public movies: Movie[]  = [];

  constructor(
    private peliculas: PeliculasService
  ) { }


  ngOnInit(): void {
    this.getPopularMovies()
  }


  getPopularMovies(){
    this.peliculas.getCartelera().subscribe(res=>{
      this.movies = res.results;
    },error=>{
      console.log(error);
    });
  }




}
