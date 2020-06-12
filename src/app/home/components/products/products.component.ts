import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

import { ProductsService } from '../../../core/services/products/products.service';
import { Product } from '../../../product.model';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[];
  data: any;
  img: any;
  constructor(
    private productsService: ProductsService,
    private storage: AngularFireStorage,
  ) {

  }

  ngOnInit(): void {
    this.getProducts();
  }


  clickProduct(codigo: string) {
    console.log('producto');
    console.log(codigo);
  }

  getProducts() {
    this.productsService.getProductos().subscribe(data => {
      this.products = data.map( e => {
        const ref = this.storage.storage.refFromURL(e.payload.doc.data()['image']);
        this.img = ref.getDownloadURL();
        return {
          codigo: e.payload.doc.data()['codigo'],
          producto: e.payload.doc.data()['producto'],
          img: this.img,
          descripcion_corta: e.payload.doc.data()['descripcion_corta'],
          descripcion_larga: e.payload.doc.data()['descripcion_larga']
        };
      });
      console.log(this.products);
    });
  }
}
