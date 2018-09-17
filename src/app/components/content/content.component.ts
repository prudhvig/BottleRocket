import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../../services/restaurants.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  restaurants: any[] =[];
  constructor(private restaurantService: RestaurantsService) { }

  ngOnInit() {
    this.restaurantService.getRestaurants().subscribe(res =>{
      this.restaurants = res.restaurants;
    })
  }

}
