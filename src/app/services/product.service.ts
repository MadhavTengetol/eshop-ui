import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl = 'http://localhost:8080';
  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get('http://localhost:8080/products');
  }

  getLogin(emailId: string) {
    let data = {

      email: emailId

    };


    return this.http.post('http://localhost:8080/products/login', data);
  }

}
