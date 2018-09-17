import { Component, OnInit, NgZone } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private location: Location, private router: Router, private zone: NgZone) { }
  icWebForwardPath = "assets/ic_webForward@2x.png";
  icWebRefreshPath = "assets/ic_webRefresh@2x.png";
  icWebBackPath = "assets/ic_webBack@2x.png";
  imgLogoPath = "assets/bottlerocket.png";
  imgHireUsHeaderPath = "assets/Hire-Us-header-1600x667.jpg";

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }

  refresh() {
    this.zone.runOutsideAngular(() => {
      location.reload();
    })
  }

  goNext() {
    this.location.forward();
  }
}
