import { Injectable } from '@angular/core';
import {Product} from "../product/product";
import {CartItems} from "../cart-summary/cartItems";
import {CartItem} from "../cart-summary/cartItem";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addToCart(product:Product){//Sepet ekle fonksiyonu
    let item=CartItems.find(c=>c.product.id===product.id);
    if(item){
      item.quantity+=1;
    }else {
      let cartItem=new CartItem();
      cartItem.product=product;
      cartItem.quantity=1;
      CartItems.push(cartItem);
    }
  }
  removeFromCart(product: Product){
    let item:CartItem=<CartItem>CartItems.find(c => c.product.id === product.id);
    CartItems.splice(CartItems.indexOf(item),1);
  }
  list():CartItem[]{
    return CartItems;
  }
}
