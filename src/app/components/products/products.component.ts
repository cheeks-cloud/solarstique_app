import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

    products = [
      {
        name: 'Product 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: '$10',
        imageUrl: 'https://via.placeholder.com/400x400?text=Product+1'
      },
      {
        name: 'Product 2',
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        price: '$20',
        imageUrl: 'assets/images/freezer-2.jpg'
      },
      {
        name: 'Product 3',
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        price: '$30',
        imageUrl: 'https://via.placeholder.com/400x400?text=Product+3'
      },
      {
        name: 'Product 4',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        price: '$40',
        imageUrl: 'https://via.placeholder.com/400x400?text=Product+4'
      },
      {
        name: 'Product 5',
        description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: '$50',
        imageUrl: 'assets/images/freezer-3.jpg'
      },
      {
        name: 'Product 6',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: '$60',
        imageUrl: 'https://via.placeholder.com/400x400?text=Product+6'
      }
    ];
  }
  

