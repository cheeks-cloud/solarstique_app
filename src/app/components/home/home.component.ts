import { Component ,AfterViewInit} from '@angular/core';
import 'src/assets/script.js'

import 'slick-carousel/slick/slick.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  products = [
    {
      name: 'Ayogu',
      description: 'Named after the father of our founder and CEO.They are specially made for cooling drinks, dairy products, etc en route to markets, stalls, or homes.This prototype model is a 150 Litre capacity and can be scaled up to 1000 liters. ',
      price: '$10',
      imageUrl: 'assets/images/ayo 2.jpeg'
    },
    {
      name: 'Solar Cold Room',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      price: '$20',
      imageUrl: 'assets/images/freezer-2.jpg'
    },
    {
      name: 'Chill Tent',
      description: 'chill tents are a cubic meter cold storage box that uses “liquid ice” as its coolant. It is specially made for fruits and vegetable farmers and sellers .They are solar and salt water powered',
      price: '$30',
      imageUrl: 'assets/images/chill tent.jpeg'
    }
  ];
}
