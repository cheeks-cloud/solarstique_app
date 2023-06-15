import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent  implements AfterViewInit{
  ngAfterViewInit(): void {
    document.addEventListener("DOMContentLoaded", function() {
      const carouselItems = document.querySelectorAll(".carousel-item");
      carouselItems.forEach(function(item, index) {
        setTimeout(function() {
          item.classList.remove("carousel-item-initial");
        }, index * 1000);
      });
    });
  }


}
