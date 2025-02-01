import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProducts } from '../interfaces/IProducts';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private _HttpClient: HttpClient) {}

  getAllProducts() {
    return this._HttpClient.get<IProducts>(
      'https://ecommerce.routemisr.com/api/v1/products'
    );
  }
}
