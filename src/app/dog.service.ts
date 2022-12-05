import { Injectable } from '@angular/core';
import { Dog } from './dog';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DogService {

  private url = 'https://dog.ceo/api/breeds/image/random';

  getDog() {
    return this.http.get<Dog>(this.url)
  }

  constructor(private http: HttpClient) { }
}