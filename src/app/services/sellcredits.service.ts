import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// // import { CarbonCredit } from '../models/carbon-credit.model';


// @Injectable({
//   providedIn: 'root'
// })
// export class SellcreditsService {

//   private readonly apiUrl = 'http://localhost:8000/api';

//   constructor(private readonly http: HttpClient) { }

  // sellCredits(creditDetails: any): Observable<any> {
  //   const url = `${this.apiUrl}/sell-credits/`;
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       Authorization: `Bearer ${localStorage.getItem('token')}`
  //     })
  //   };
  //   return this.http.post<any>(url, creditDetails, httpOptions)
  //     .pipe(
  //       tap((response: any) => {
  //         console.log(response);
  //       }),
  //       catchError((error: any) => {
  //         console.log(error);
  //         return throwError(error);
  //       })
  //     );
  // }



  // sellCarbonCredits(credit: CarbonCredit): Observable<CarbonCredit> {
  //   const url = `${this.apiUrl}/sell-credits/`;
  //   return this.http.post<CarbonCredit>(url, credit);
  // }

  // getMyCarbonCredits(): Observable<CarbonCredit[]> {
  //   const url = `${this.apiUrl}/my-credits/`;
  //   return this.http.get<CarbonCredit[]>(url);
  // }

  // deleteCarbonCredit(id: number): Observable<void> {
  //   const url = `${this.apiUrl}/credits/${id}/`;
  //   return this.http.delete<void>(url);
  // }
  
// }
