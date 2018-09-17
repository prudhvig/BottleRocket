import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.scss']
})
export class RestaurantDetailsComponent implements OnInit {
  restaurantDetails = {};
  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.restaurantDetails = this.dataService.getRestaurantDetsils();
    if (this.isEmpty(this.restaurantDetails)) {
      this.router.navigate(['restaurants']);
    }
  }

  isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }
}
