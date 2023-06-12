import { Component, OnInit, Input } from '@angular/core';
import { CartService, CartItem, Item } from 'src/app/services/cart.service'
import { ActivatedRoute ,Router} from '@angular/router';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})


export class CartComponent implements OnInit {

  productId: number = 0;

  cartItems: CartItem[] = [];

  constructor(private route: ActivatedRoute, private cartService: CartService,private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productId = params['id'];
    });

    this.cartItems = this.cartService.getCartItems();

  }

  decreaseQuantity(item: CartItem) {
    this.cartService.decreaseQuantity(item);
  }

  increaseQuantity(item: CartItem) {
    this.cartService.increaseQuantity(item);
  }

  removeItem(item: CartItem) {
    this.cartService.removeCartItem(item.product);
    this.cartItems = this.cartService.getCartItems();
  }

  getTotal(): number {
    let total = 0;
    for (let item of this.cartItems) {
      total += (item.product.price * item.quantity);
    }
    return total;
  }

  checkout() {
    this.cartService.checkout();
    this.router.navigate(['/products']);

    
  }
  logout(): void {
    localStorage.removeItem('token')
    this.router.navigate(['/products']);
   }



}
