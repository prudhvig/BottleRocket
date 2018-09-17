import { Component, OnInit, Input } from '@angular/core';
import { RestaurantsService } from '../../services/restaurants.service';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {

  showLoader: boolean = false;
  restaurants: any[] = [];
  constructor(private dataService: DataService, private restaurantService: RestaurantsService, private router: Router) { }

  ngOnInit() {
    this.showLoader = true;
    this.restaurantService.getRestaurants().subscribe(res => {
      this.restaurants = res.restaurants;
      this.showLoader = false;
    })
  }


  getRestaurantDetails(restaurant) {
    this.dataService.setRestaurantDetsils(restaurant);
    this.router.navigate(['/restaurant-details']);
  }

}
