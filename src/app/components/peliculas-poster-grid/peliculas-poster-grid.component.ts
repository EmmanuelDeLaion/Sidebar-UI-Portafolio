import { Component, Input, OnInit } from '@angular/core';

import { Movie } from 'src/app/interfaces/cartelera-response';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-peliculas-poster-grid',
  templateUrl: './peliculas-poster-grid.component.html',
  styleUrls: ['./peliculas-poster-grid.component.scss'],
  providers: [NgbRatingConfig]
})
export class PeliculasPosterGridComponent implements OnInit {

  @Input() movies: Movie[] = [];


  constructor(config: NgbRatingConfig) {
    config.max = 5;
    config.readonly = true;
   }

  ngOnInit(): void {
    console.log(this.movies);

  }



}
