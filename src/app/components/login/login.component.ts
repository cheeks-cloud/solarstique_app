import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/services/auth-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent  implements OnInit{

  formGroup: FormGroup ;
  

  constructor( private authService: AuthServiceService, private router: Router) {
    
   }

  ngOnInit(): void {
    this.initForm();
  }
  initForm(){
    this.formGroup = new FormGroup({
      email: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    });
  }
  loginProcess(){
    if(this.formGroup.valid){
      const loginCredentials: any = {
        email: this.formGroup.controls['email'].value,
        password: this.formGroup.controls['password'].value
    };

      this.authService.login(loginCredentials).subscribe(result =>{
        const token = result["user"]["token"]
        localStorage.setItem("token",JSON.stringify(token) )
        this.router.navigate(['/sell']);
      });
    }
  }

}
