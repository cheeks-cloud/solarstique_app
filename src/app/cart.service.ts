import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

 export interface Item {
  id: number;
  name: string;
  description:String;
  price: number;
 }

  export interface CartItem {
  product: Item;
  quantity: number;
}


@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items:CartItem[] = [];
  private cartItemCount = new BehaviorSubject(0);

  constructor() {  }

  addToCart(item: Item) {
      let added = false;
      for (let p of this.items) {
        if (p. product.id === item.id) {
          p.quantity += 1;
          added = true;
          break;
        }
      }
      if (!added) {
        const cartItem: CartItem = { product: item, quantity: 1 };
        this.items.push(cartItem);
      }
      this.cartItemCount.next(this.cartItemCount.value + 1);
    }
  

  
 increaseQuantity(item: CartItem) {
      item.quantity++;
    }

  getCartItems() {
    return this.items;
  }

  getCartItemCount() {
    return this.cartItemCount;
  }

  clearCart() {
    this.items = [];
    this.cartItemCount.next(0);
  }

  removeCartItem(item: Item) {
    for (let [index, p] of this.items.entries()) {
      if (p. product.id === item.id) {
        this.cartItemCount.next(this.cartItemCount.value - p.quantity);
        this.items.splice(index, 1);
      }
    }
  }
 
decreaseQuantity(item: CartItem) {
  if (item.quantity > 1) {
    item.quantity--;
  } else {
    this.removeCartItem;
  }
}

getTotal(): number {
  let total = 0;
  for (let item of this.items) {
    total += item. product.price * item.quantity;
  }
  return total;
}

checkout() {
  // Code to complete checkout process
  this.items = [];
  this.cartItemCount.next(0);
  alert('Thank you for your purchase!');
}

}



