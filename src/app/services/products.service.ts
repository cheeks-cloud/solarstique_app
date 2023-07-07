import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
    // url = "http://localhost:8000"
   url= "https://solarstiquesuzushi7.onrender.com"
    headers = new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Accept': '*/*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('token'))
      }
    )

    requestOptions = { headers: this.headers };


  constructor(private http: HttpClient) { }

  getProducts():Observable<any>{
    return this.http.get(`${this.url}/products`)
  }



}
