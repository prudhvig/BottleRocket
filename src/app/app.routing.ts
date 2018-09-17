import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from './components/contact/contact.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { RestaurantDetailsComponent } from './components/restaurant-details/restaurant-details.component';

const routes: Routes = [
    { path: 'contact', component: ContactComponent },
    { path: 'restaurants', component: RestaurantComponent },
    { path: 'restaurant-details', component: RestaurantDetailsComponent },
    { path: '', redirectTo: '/restaurants', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
