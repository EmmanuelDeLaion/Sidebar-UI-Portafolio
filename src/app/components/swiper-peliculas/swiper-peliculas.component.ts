import {   AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/cartelera-response';



@Component({
  selector: 'app-swiper-peliculas',
  templateUrl: './swiper-peliculas.component.html',
  styleUrls: ['./swiper-peliculas.component.scss']
})
export class SwiperPeliculasComponent implements   AfterViewInit {


  @Input() movies: Movie[] = [];


  constructor() {}

  ngAfterViewInit() {
    console.log(this.movies);
  }







}
