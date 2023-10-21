import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { OurSpecialsComponent } from './our-specials/our-specials.component';
import { DetailsComponent } from './details/details.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [{ 
  path: "", component: HomepageComponent
},{
  path:"about", component: AboutComponent
},{
  path:"", component : ProductListComponent
},{
  path:"product",component:DetailsComponent
}

 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
