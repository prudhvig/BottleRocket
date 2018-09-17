import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  constructor(private httpClient: HttpClient) { }

  getRestaurants(): Observable<any> {
    return this.httpClient.get('https://s3.amazonaws.com/br-codingexams/restaurants.json');
  }
}
