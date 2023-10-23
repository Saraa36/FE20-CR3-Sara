import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { OurSpecialsComponent } from './our-specials/our-specials.component';
import { DetailsComponent } from './details/details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [{ 
  path: "", component: HomepageComponent
},{
  path:"about", component: AboutComponent
},{
  path:"products", component : ProductListComponent
},{
  path:"product/:id",component:DetailsComponent
},{
  path:"specials", component : OurSpecialsComponent
},{
  path: "cart", component:CartComponent
}


 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
