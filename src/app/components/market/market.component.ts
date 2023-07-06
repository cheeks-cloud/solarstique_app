import { Component, OnInit } from '@angular/core';
import { ProfileServiceService } from 'src/app/services/profile-service.service';
import { BuyService } from 'src/app/services/buy.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {

  profile = {};
  username = localStorage.getItem("username")

  formData: any = {};

    constructor(private profileService:ProfileServiceService,private buyService: BuyService){}

      fetchProfile(): void {
        this.profileService.getProfile()
          .subscribe(
            profile => {
              this.profile = profile.user;
            },
            error => {
              console.error(error);
            }
          );
      }

      buyCarbonCredits(formData: any) {
        this.buyService.buyCarbonCredits(formData).subscribe(
          (response) => {
            // Handle successful response
            console.log('Buy success:', response);
          },
          (error) => {
            console.error('Buy error:', error);
          }
        );
      }
      sellCarbonCredits(formData: any) {
        this.buyService.buyCarbonCredits(formData).subscribe(
          (response) => {
            console.log('Buy success:', response);
          },
          (error) => {
            console.error('Buy error:', error);
          }
        );
      }
  
    ngOnInit(): void {

      this.fetchProfile();
      

     };



}
