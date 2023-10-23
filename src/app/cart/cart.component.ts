import { Component , OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Iproducts } from '../iproducts';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent  implements OnInit {

  cart: Iproducts[]= [];
  total:number= 0;
  // cart:string[ ] 

  // oder cart :Array<>

  constructor(private CS: CartService){}

  
ngOnInit(): void {
  this.cart= this.CS.getCart();
  this.total= this.CS.calcTotal();
  
}

}
