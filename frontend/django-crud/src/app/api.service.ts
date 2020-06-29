import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PersistanceService } from "./localstorage.service";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = "http://127.0.0.1:8000/api";
  access_token = '';
  header_token = '';
  httpHeaders: any;
  constructor(private http: HttpClient, private ps: PersistanceService) {
  	this.access_token = this.ps.get("token").access;
	this.header_token = 'Bearer ' + this.access_token;
    	this.httpHeaders = new HttpHeaders({'Content-Type':'application/json', 'Authorization':this.header_token});
  }

  //httpHeaders = this.ihttpHeaders;
	  //new HttpHeaders({'Content-Type':'application/json', 'Authorization':this.header_token});

  getAllMovies(): Observable<any> {
    return this.http.get(this.baseUrl + '/movies/', {headers: this.httpHeaders});
  }

  getOneMovie(id: string): Observable<any> {
    return this.http.get(this.baseUrl + '/movies/' + id + '/', {headers: this.httpHeaders});
  }

  updateMovie(movie): Observable<any> {
    const body = movie;
    return this.http.put(this.baseUrl + '/movies/' + movie.id + '/', body, {headers: this.httpHeaders});
  }

  addMovie(movie): Observable<any> {
    //console.log(this.access_token);
    //console.log(this.httpHeaders);
    const body = {title: movie.title, desc: movie.desc, year: movie.year};
    return this.http.post(this.baseUrl + '/movies/', body, {headers: this.httpHeaders});
  }

  deleteMovie(id): Observable<any> {
    return this.http.delete(this.baseUrl + '/movies/' + id + '/', {headers: this.httpHeaders});
  }
}
