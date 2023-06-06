import { Component, OnInit, EventEmitter } from '@angular/core';
import { Router } from "@angular/router"
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthServiceService } from 'src/app/services/auth-service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  userToken: string = null;
  username: string = null;
  authenticated = this.userToken != null;
  message = 'You are not logged in';

  constructor(private router: Router, private http: HttpClient,private authService : AuthServiceService) {
  }
  authEmitter = new EventEmitter<Boolean>();

  ngOnInit(): void {

    this.authService.isAuthenticated().subscribe((isAuthenticated: boolean) => {
      
    this.authenticated = true
    });
    this.username = JSON.parse(localStorage.getItem("username"))
    this.userToken = JSON.parse(localStorage.getItem('token'))
    if (this.authenticated) {
      this.http.get('http://localhost:8000/customers/' + JSON.parse(localStorage.getItem('username'))).subscribe(
        (user: any) => {
          this.message = `Hello ${user.username}`;
          this.authenticated = true;
          this.authEmitter.emit(true);
        },
        _err => {
          this.message = 'You are not logged in';
          this.authEmitter.emit(false);
        }
      );
    }
  }

  logout(): void {
    localStorage.clear();
    this.authService.setAuthenticated(false);
    this.router.navigate(['/']);
  }


}
