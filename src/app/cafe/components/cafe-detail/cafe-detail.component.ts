import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AngularFireStorage } from '@angular/fire/storage';
import { ActivatedRoute, Params } from '@angular/router';

import { Product } from '@core/models/product.model';
import { CafesService } from '@core/services/cafes/cafes.service';
import { CartService } from '@core/services/cart/cart.service';

@Component({
  selector: 'app-cafe-detail',
  templateUrl: './cafe-detail.component.html',
  styleUrls: ['./cafe-detail.component.css']
})
export class CafeDetailComponent implements OnInit {

  cafe: Product[];
  newCafe: Product;
  data: any;
  img: any;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private cafesService: CafesService,
    private storage: AngularFireStorage,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const codigo = params.codigo;
      this.fetchCafe(codigo);
    });
  }

  fetchCafe(codigo: string) {
    this.cafesService.getCafe(codigo).subscribe(data => {
      this.cafe = data.map ( e => {
        const ref = this.storage.storage.refFromURL(e.payload.doc.data().image);
        this.img = ref.getDownloadURL();
        return {
          codigo: e.payload.doc.data().codigo,
          producto: e.payload.doc.data().producto,
          img: this.img,
          descripcion_corta: e.payload.doc.data().descripcion_corta,
          descripcion_larga: e.payload.doc.data().descripcion_larga,
          precioVenta: e.payload.doc.data().precioVenta
        };
      });
      console.log(this.cafe);
    });
  }

  addcart() {
    this.newCafe = {
      codigo: this.cafe[0].codigo,
      producto: this.cafe[0].producto,
      precioVenta: this.cafe[0].precioVenta,
      img: this.cafe[0].img,
    };
    this.cartService.addCart(this.newCafe);
  }

  backClicked() {
    this.location.back();
  }

}
