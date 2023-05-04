import { Component , OnInit} from '@angular/core';
import { CartService,Item} from 'src/app/cart.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

    public products = [
      {
        id:1,
        name: 'Ayogu',
        description: 'Named after the father of our founder and CEO.They are specially made for cooling drinks, dairy products, etc en route to markets, stalls, or homes.This prototype model is a 150 Litre capacity and can be scaled up to 1000 liters. ',
        price: 10,
        imageUrl: 'assets/images/ayo 2.jpeg'
      },
      {
        id:2,
        name: 'Solar Cold Room',
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        price: 10,
        imageUrl: 'assets/images/freezer-2.jpg'
      },
      {
        id:3,
        name: 'Chill Tent',
        description: 'chill tents are a cubic meter cold storage box that uses “liquid ice” as its coolant. It is specially made for fruits and vegetable farmers and sellers .They aresolar and salt water powered',
        price: 10,
        imageUrl: 'assets/images/chill tent.jpeg'
      },
      {
        id:4,
        name: 'Ice Blocks',
        description: 'special ice blocks that does not defrost for 4 days. The Ice block is made using special food preservation solution that also helps to keep the food item fresh and preserved.',
        price: 10,
        imageUrl: 'assets/images/Ice Blocks.png'
      },
      {
        id:5,
        name: '400ltrs Freezer',
        description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: 10,
        imageUrl: 'assets/images/freezer-3.jpg'
      },
      {
        id:6,
        name: 'Tricycled freezers',
        description: 'It is a detachable tricycle Mobile solar freezer. They are specially made for cooling perishable products en route to markets, stalls, or homes.It is totally solar-powered and works with little or no battery backup.  ',
        price: 10,
        imageUrl: 'assets/images/Tricycled freezers (1).png'
      },
      {
        id:7,
        name: '250lts Converted Solar freezer',
        description: 'It is a detachable tricycle Mobile solar freezer. They are specially made for cooling perishable products en route to markets, stalls, or homes.It is totally solar-powered and works with little or no battery backup.  ',
        price: 10,
        imageUrl: 'assets/images/250 liters capacity converted solar freezers..jpg'
      },
      {
        id:8,
        name: 'Tricycled freezers',
        description: 'It is a detachable tricycle Mobile solar freezer. They are specially made for cooling perishable products en route to markets, stalls, or homes.It is totally solar-powered and works with little or no battery backup.  ',
        price: 10,
        imageUrl: 'assets/images/Tricycled freezers (1).png'
      },
      {
        id:9,
        name: 'Tricycled freezers',
        description: 'It is a detachable tricycle Mobile solar freezer. They are specially made for cooling perishable products en route to markets, stalls, or homes.It is totally solar-powered and works with little or no battery backup.  ',
        price:10,
        imageUrl: 'assets/images/Tricycled freezers (1).png'
      }
    ];

    constructor(private cartService: CartService){}

    ngOnInit(): void {  }

    addToCart(product:Item) {
      this.cartService.addToCart(product);
      window.alert('Your product has been added to the cart!');

    }
   
  
}
