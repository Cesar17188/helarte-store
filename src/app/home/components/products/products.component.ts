import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';

import { ProductsService } from '../../../products.service';
import { Product } from '../../../product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[];

  constructor(
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.products = this.productsService.getAllProducts();
  }
  clickProduct(codigo: string) {
    console.log('producto');
    console.log(codigo);
  }
}
