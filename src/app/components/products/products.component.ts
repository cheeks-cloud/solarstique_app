import { Component , OnInit} from '@angular/core';
import { CartService,Item} from 'src/app/services/cart.service'
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products = [];


    constructor(private cartService: CartService,private productsService:ProductsService){}

      fetchProducts(): void {
        this.productsService.getProducts()
          .subscribe(
            products => {
              this.products = products;
            },
            error => {
              console.error(error);
            }
          );
      }
  
    ngOnInit(): void {

      this.fetchProducts();
      

     };



     addToCart(product:Item) {
      this.cartService.addToCart(product);
      console.log(product)
      window.alert('Your product has been added to the cart!');

    }

      
    }


  

   
   

  

