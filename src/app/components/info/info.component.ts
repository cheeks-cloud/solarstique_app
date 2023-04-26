import { Component } from '@angular/core';


// // declare var $:any;

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],

})
 export class InfoComponent {

  images = [
    {img :"/assets/images/TEF logo.jpg"},
    {img :"/assets/images/strat up Energy transition.jpg"},
    {img :"/assets/images/fate foundation logo.jpg"},
    {img:"/assets/images/powerstove logo.png" },
    {img:"/assets/images/RUFORUM Logo New (002).jpg"},
    {img :"/assets/images/robo logo.png"},
    {img:"/assets/images/generation africa.jpg"},
    {img :"/assets/images/gogettaz.jpg"},
    {img :"/assets/images/roddenbery foundation.jpg"},
    {img :"/assets/images/seedstar.jpg"},
    {img:"assets/images/ventures platform (1).jpg"},
  ];

// sliderOptions: NgsSliderOptions = {
//   autoplay: true,
//   autoplayTimeout: 2000,
//   loop: true,
//   animation: 'zoom',
//   thumbnails: true,
//   previewWidth: 100,
//   //   previewHeight: 100,
// };
// onSliderLoaded(slider: NgsSliderComponent) {
//   slider.slideTo(2); // slide to the third image in the slider (index 2)
// }
}

