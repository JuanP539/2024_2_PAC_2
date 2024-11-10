import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpCustomRequestsService {

  constructor(private http: HttpClient) { }

  getMeowFact() {
    return this.http.get('https://meowfacts.herokuapp.com/');
  }
}
