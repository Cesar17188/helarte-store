import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { ActivatedRoute, Params } from '@angular/router';

import { Product } from 'src/app/core/models/product.model';
import { CafesService } from './../../../core/services/cafes/cafes.service';

@Component({
  selector: 'app-cafe-detail',
  templateUrl: './cafe-detail.component.html',
  styleUrls: ['./cafe-detail.component.css']
})
export class CafeDetailComponent implements OnInit {

  cafe: Product[];
  data: any;
  img: any;

  constructor(
    private route: ActivatedRoute,
    private cafesService: CafesService,
    private storage: AngularFireStorage,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const codigo = params.codigo;
      // this.shake = this.cafesService.getshake(codigo);
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

}
