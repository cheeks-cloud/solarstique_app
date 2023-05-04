import { Component,OnInit } from '@angular/core';
import { CartService,CartItem} from 'src/app/cart.service'



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})


export class CartComponent implements OnInit {


  cartItems: CartItem[] = [];

  constructor(public cartService: CartService) { }

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
  }

  decreaseQuantity(item: CartItem) {
    this.cartService.decreaseQuantity(item);
    }

  increaseQuantity(item: CartItem) {
      this.cartService.increaseQuantity(item);
      }

  removeItem(item: CartItem) {
        this.cartService.removeCartItem(item. product);
        this.cartItems = this.cartService.getCartItems();
        }

  getTotal(): number {
          let total = 0;
          for (let item of this.cartItems) {
          total += (item. product.price * item.quantity);
          }
          return total;
          }

  checkout() {
            // Implement checkout logic here
            this.cartService.clearCart();
            this.cartItems = [];
            alert('Checkout successful!');
            }
            
            

}
