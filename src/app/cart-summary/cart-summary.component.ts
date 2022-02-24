import { Component, OnInit } from '@angular/core';
import {CartService} from "../services/cart.service";
import {CartItem} from "./cartItem";
import {Product} from "../product/product";

import {AlertifyService} from "../services/alertify.service";
import {ProductService} from "../services/product.service";

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

  constructor(private cartService:CartService,private alertifyServices:AlertifyService,private productService:ProductService) { }

  cartItems:CartItem[]=[];
  product: Product;

 // myThumbnail="https://wittlock.github.io/ngx-image-zoom/assets/thumb.jpg";
  //myFullresImage="https://wittlock.github.io/ngx-image-zoom/assets/fullres.jpg";
  ngOnInit(): void {
    this.getCart();
  }

  getCart(){
    this.cartItems=this.cartService.list();
  }
  removeFromCart(product:Product){
    this.cartService.removeFromCart(product);
    this.alertifyServices.error(product.name+"Sepetten silindi.")
  }
}
