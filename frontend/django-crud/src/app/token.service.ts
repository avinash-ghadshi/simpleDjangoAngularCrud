import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  baseUrl = "http://127.0.0.1:8000";
  httpHeaders = new HttpHeaders({'Content-Type':'application/json'});

  constructor(private http: HttpClient) { }

  getToken(): Observable<any> {

    const body = {username: 'avinash', password: '^YHNnhy6'};
    return this.http.post(this.baseUrl + '/token/obtain/', body, {headers: this.httpHeaders});

  }


}

