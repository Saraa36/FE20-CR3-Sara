import { Component,OnInit } from '@angular/core';
import { Iproducts } from '../iproducts';
import { products } from '../products';
import { ActivatedRoute, Params } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  products : Iproducts ={} as Iproducts
  id : number = 0;

  constructor(private route: ActivatedRoute, private cs :CartService){}

  addToCart(){
    alert('item added');
    this.cs.addToCart(this.products);

  }
  ngOnInit(): void {
   this.route.params.subscribe((param:Params) => {
    this.id =+param["id"];
    this.products = products[this.id];
   })
  }

}

  

