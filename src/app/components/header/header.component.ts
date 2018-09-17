import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  showBackPath: boolean = false;
  iconMapPath = "assets/icon_map@2x.png";
  icWebBackPath = "assets/ic_webBack@2x.png";

  constructor(private location: Location, private router: Router) { }

  ngOnInit() {
    console.log(this.router.url);
    if (this.router.url === '/restaurant-details') {
      this.showBackPath = true;
    }
  }

  goBack() {
    this.location.back();
  }

}
