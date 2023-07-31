import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BuyService {
  url = "https://solarstiquesuzushi7.onrender.com"
  headers = new HttpHeaders(
    {
      'Content-Type': 'application/json',
      'Accept': '*/*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('token'))
    }
  )

  requestOptions = { headers: this.headers };

  carbonCreditBalance: number = 0;

    constructor(private http: HttpClient) { }
    buyCarbonCredits(formData: any): Observable<any> {
      return this.http.post(`${this.url}/buy/`, formData);
    }

    sellCarbonCredits(formData: any): Observable<any> {
      return this.http.post(`${this.url}/sell/`, formData, this.requestOptions);
    }






}