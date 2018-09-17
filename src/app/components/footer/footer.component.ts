import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  lunchImgPath = "assets/tab_lunch@2x.png";
  internetImgPath = "assets/tab_internets@2x.png";
  constructor() { }

  ngOnInit() {
  }

}
