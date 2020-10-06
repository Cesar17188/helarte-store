import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { Product } from '@core/models/product.model';
import { HELADO } from '../../models/helado.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private products: Product[] = [];
  private cart = new BehaviorSubject<Product[]>([]);

  cart$ = this.cart.asObservable();

  constructor() { }

  addCart(product: Product) {
    this.products = [...this.products, product];
    this.cart.next(this.products);
  }

  totalCart() {
    return this.products.map(t => t.precioVenta)
    .reduce((acc, value) => acc + value);
  }
}
