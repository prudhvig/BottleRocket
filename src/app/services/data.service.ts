import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private restauarantDetails = {};

  constructor() { }

  public setRestaurantDetsils(restaurant) {
    this.restauarantDetails = restaurant;
  }
  public getRestaurantDetsils() {
    return this.restauarantDetails;
  }

}
