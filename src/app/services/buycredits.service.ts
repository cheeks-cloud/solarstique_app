import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BuycreditsService {

  // private buyCreditsUrl = environment.apiUrl + '/buy-credits/';


  constructor(private http: HttpClient) { }

// buyCredits(amount: number): Observable<any> {
//   const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.authService.getToken());

//   const body = {
//     amount: amount
//   };

//   return this.http.post<any>(`${environment.apiUrl}/buy-credits/`, body, { headers: headers });
// }

// buyCredits(amount: number, token: string): Observable<any> {
//   const headers = new HttpHeaders({
//     'Content-Type': 'application/json',
//     Authorization: 'Bearer ' + token
//   });
//   const body = { amount };
//   return this.http.post<any>(this.buyCreditsUrl, body, { headers });
// }
}