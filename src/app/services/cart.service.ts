import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Item {
  id: number;
  name: string;
  description: String;
  price: number;
  image_url: string;

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
  items: CartItem[] = localStorage.getItem('cartItems') === null ? [] : JSON.parse(localStorage.getItem('cartItems'));
  cartItemCount = new BehaviorSubject(0);

  constructor(private http: HttpClient) { }


  addToCart(item: Item) {
    let added = false
    let itemss = this.items;
    for (let p of itemss) {
      if (p.product.id === item.id) {
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
    let itemss = this.items;
    let index = itemss.indexOf(item);
    itemss[index].quantity+=1;
    localStorage.setItem("cartItems", JSON.stringify(itemss));
  }

  getCartItems(): CartItem[] {
    const items = this.items;
    if (items !== null) {
      return this.items;
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
    localStorage.removeItem('cartItems');
  }

  removeCartItem(item: any) {
    let itemss = this.items
    
    let index = itemss.indexOf(item)
    itemss.splice(index,1)
    
    let count = this.cartItemCount.value
    this.cartItemCount.next(count--);
    localStorage.setItem('cartItems', JSON.stringify(itemss));
  }

  decreaseQuantity(item: CartItem) {
    if (item.quantity > 1) {
      
    let itemss = this.items;
    let index = itemss.indexOf(item);
    itemss[index].quantity-=1;
    localStorage.setItem("cartItems", JSON.stringify(itemss));

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

  async checkout(): Promise<any> {

    let data = [];
    let items = this.items;
    for (var i = 0; i < items.length; i++) {
      data.push(
        {
          "productId": items[i].product.id,
          "quantity": items[i].quantity
        }
        )
    }

    let data1 = { products: data }

    console.log("data")
    console.log(data1)
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' +  JSON.parse(localStorage.getItem('token')));
try {
    const response = await this.http.post(`${this.url}/purchases/create`, data1, { headers}).toPromise();
    
        // Handle successful response
        console.log('Purchase created successfully:', response);

        alert('Thank you for your purchase! Our team will get back to you soon!');
        localStorage.removeItem('cartItems');
        return 'Purchase created successfully:' + response
  } catch (error) {
    return 'Error creating purchase:' + error;
  }

  }

}



