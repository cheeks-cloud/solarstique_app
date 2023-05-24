import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Item {
  productId: number;
  name: string;
  description: String;
  price: number;
  imageUrl: string;

}

export interface CartItem {
  product: Item;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})

export class CartService {
  url = "http://localhost:8000"
  headers = new HttpHeaders(
    {
      'Content-Type': 'application/json',
      'Accept': '*/*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('token'))
    }
  )

  requestOptions = { headers: this.headers };
  items: CartItem[] = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
  cartItemCount = new BehaviorSubject(0);

  constructor(private http: HttpClient) { }


  addToCart(item: Item) {
    let added = false
    let itemss = this.items;
    for (let p of itemss) {
      if (p.product.productId === item.productId) {
        p.quantity += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      const cartItem: CartItem = { product: item, quantity: 1 };
      itemss.push(cartItem);
    }

    localStorage.setItem('cartItems', JSON.stringify(itemss));
    this.cartItemCount.next(this.cartItemCount.value + 1);


  }


  increaseQuantity(item: CartItem) {
    item.quantity++;
  }

  getCartItems(): string[] {
    const items = localStorage.getItem("cartItems");
    if (items !== null) {
      return JSON.parse(items);
    } else {
      return [];
    }
  }

  getCartItemCount() {
    return this.cartItemCount;
  }

  clearCart() {
    this.items = [];
    this.cartItemCount.next(0);
    localStorage.setItem('cartItems', null);
  }

  removeCartItem(item: any) {
    let itemss = this.items
    for (let i = 0; i < itemss.length; i++) {
      if (itemss[i].product.productId === item.id) {
        itemss.splice(i, 1);
        break;
      }
    }
    let count = this.cartItemCount.value
    this.cartItemCount.next(count--);
    localStorage.setItem('cartItems', JSON.stringify(itemss));
  }

  decreaseQuantity(item: CartItem) {
    if (item.quantity > 1) {
      item.quantity--;
      let count = this.cartItemCount.value
      this.cartItemCount.next(count--);
    } else {
      this.removeCartItem(item);
    }
  }

  getTotal(): number {
    let total = 0;
    for (let item of this.items) {
      total += item.product.price * item.quantity;
    }
    return total;
  }

  checkout(): Observable<any> {
    alert('Thank you for your purchase!');

    let data = [];
    let items = this.items;
    for (var i = 0; i < items.length; i++) {
      data.push({ productId: items[i].product.productId, quantity: items[i].quantity })
    }
    return this.http.post(`${this.url}/purchase/create`, {products:data})



  }

}



