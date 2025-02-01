import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../core/services/products.service';
import { IProductsArr } from '../../core/interfaces/IProducts';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  allProducts: IProductsArr[] = [];

  constructor(private _ProductsService: ProductsService) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  /**
   * Handle CallingApis
   */
  getAllProducts(): void {
    this._ProductsService.getAllProducts().subscribe({
      next: (response) => {
        console.log(response.data);
        this.allProducts = response.data;
      },
    });
  }
}
