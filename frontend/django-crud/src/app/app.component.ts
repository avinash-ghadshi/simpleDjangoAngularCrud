import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { TokenService } from './token.service';
import { PersistanceService } from "./localstorage.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ ApiService ]
})
export class AppComponent {
  movies: any;
  selected_movie: any;
  token_data: any;

  constructor(private api: ApiService, public token: TokenService, private persistanceService: PersistanceService){

    if(this.token_data == '' || !this.token_data) {
    	this.getToken();
    }
    this.getMovies();
    this.selected_movie = [];
    //persistanceService.set("token", { "userid": 10, "last_login": "10/29/2018" });
    //console.log(persistanceService.get("user"));

  }

  getToken = () => {
	    	this.token.getToken().subscribe(
		    data => {
    			    this.persistanceService.set("token", data);
			    this.token_data = this.persistanceService.get("token");
			    //console.dir(this.token_data);
			    //console.log(this.token_data.access);
		    },
		    error => {
			    console.log("FAILED TO GENERATE TOKEN!");
		    }
	    )
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
