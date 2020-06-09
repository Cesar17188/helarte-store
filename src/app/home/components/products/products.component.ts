import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';

import { ProductsService } from '../../../core/services/products/products.service';
import { Product } from '../../../product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[];
  productoss: Product [];
  data: any;

  constructor(
    private productsService: ProductsService,
    private productosService: ProductsService,
  ) {}

  ngOnInit(): void {
    this.products = this.productsService.getAllProducts();
    this.productsService.getProductos().subscribe(data => {
      this.productoss = data.map( e => {
        return {
          codigo: e.payload.doc.data()['codigo'],
          producto: e.payload.doc.data()['producto'],
          image: e.payload.doc.data()['image'],
          descripcion_corta: e.payload.doc.data()['descripcion_corta'],
          description_larga: e.payload.doc.data()['descripcion_larga']
        };
      })
      console.log(this.productoss);
    });
  }
  clickProduct(codigo: string) {
    console.log('producto');
    console.log(codigo);
  }
}
