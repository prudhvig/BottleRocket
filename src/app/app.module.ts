import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { AgmCoreModule } from './components/agm/core/core.module';
import { ContactComponent } from './components/contact/contact.component';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { RestaurantDetailsComponent } from './components/restaurant-details/restaurant-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ContentComponent,
    FooterComponent,
    HeaderComponent,
    RestaurantComponent,
    RestaurantDetailsComponent,
  ],
  imports: [
    AppRoutingModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyB3a71eakX1ji_aFPmQpGf5gWD278RRl4o'}),
    BrowserModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
