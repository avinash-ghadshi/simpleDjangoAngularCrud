import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ ApiService ]
})
export class AppComponent {
  movies: any;
  selected_movie: any;

  constructor(private api: ApiService){
    this.getMovies();
    this.selected_movie = [];
  }
  getMovies = () => {
	  this.api.getAllMovies().subscribe(
		  data => {
			  this.movies=data;
		  },
		  error => {
			  console.log(error);
		  }
	  )
  }

  movieClicked = (movie: { id: any; }) => {
    this.api.getOneMovie(movie.id).subscribe(
		  data => {
        this.selected_movie = data;
		  },
		  error => {
			  console.log(error);
		  }
	  )
  }

  updateMovie = () => {
    this.api.updateMovie(this.selected_movie).subscribe(
		  data => {
        this.getMovies();
		  },
		  error => {
			  console.log(error);
		  }
	  )
  }

  addMovie = () => {
    this.api.addMovie(this.selected_movie).subscribe(
		  data => {
        this.movies.push(data);
		  },
		  error => {
			  console.log(error);
		  }
	  )
  }

  deleteMovie = () => {
    this.api.deleteMovie(this.selected_movie.id).subscribe(
		  data => {
        this.getMovies();
		  },
		  error => {
			  console.log(error);
		  }
	  )
  }
}
