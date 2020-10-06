import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../../core/services/products/products.service';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  products = [];
  img: any;
  data: any;
  displayedColumns: string[] = ['codigo', 'producto', 'actions'];

  constructor(
    private productsService: ProductsService,
    private storage: AngularFireStorage
  ) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productsService.getProductos().subscribe(data => {
      this.products = data.map( e => {
        // tslint:disable-next-line: no-string-literal
        const ref = this.storage.storage.refFromURL(e.payload.doc.data()['image']);
        this.img = ref.getDownloadURL();
        return {
          id: e.payload.doc.id,
          // tslint:disable-next-line: no-string-literal
          codigo: e.payload.doc.data()['codigo'],
          // tslint:disable-next-line: no-string-literal
          producto: e.payload.doc.data()['producto'],
          img: this.img,
          // tslint:disable-next-line: no-string-literal
          descripcion_corta: e.payload.doc.data()['descripcion_corta'],
          // tslint:disable-next-line: no-string-literal
          descripcion_larga: e.payload.doc.data()['descripcion_larga']
        };
      });
      console.log(this.products);
    });
  }


}
