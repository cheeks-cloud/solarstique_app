import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  formGroup: FormGroup;

  constructor(public snackBar: MatSnackBar, private authService: AuthServiceService, private http: HttpClient,private router: Router
    ) {}
    openSnackBar(message: string, action: string) {
      this.snackBar.open(message, action, {
         duration: 5000,
      });
   }
    response!: any;
    message!: string;

  ngOnInit(): void {
    this.initForm();
  }
  
  initForm(){
    this.formGroup = new FormGroup({
      email: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required]),
      username: new FormControl('',[Validators.required]),
      f_name: new FormControl('',[Validators.required]),
      l_name: new FormControl('',[Validators.required]),
    });
  }
  signupProcess(){
    console.log('home')
    if(this.formGroup.valid){
      const loginCredentials: any = {
       
        email: this.formGroup.controls['email'].value,
        password: this.formGroup.controls['password'].value,
        username: this.formGroup.controls['username'].value,
        first_name: this.formGroup.controls['f_name'].value +' '+this.formGroup.controls['l_name'].value,
        
    };
    
      this.authService.signup(loginCredentials).subscribe(result =>{
        console.log('Here we are',result)
        this.router.navigate(['/auth']);

      });
    }
  }




  
}


