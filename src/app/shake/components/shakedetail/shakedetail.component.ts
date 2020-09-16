import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from 'src/app/core/models/product.model';
import { ShakesService } from 'src/app/core/services/shakes/shakes.service';

@Component({
  selector: 'app-shakedetail',
  templateUrl: './shakedetail.component.html',
  styleUrls: ['./shakedetail.component.css']
})
export class ShakedetailComponent implements OnInit {

  shake: Product[];
  data: any;
  img: any;

  constructor(
    private route: ActivatedRoute,
    private shakesService: ShakesService,
    private storage: AngularFireStorage,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const codigo = params.codigo;
      // this.shake = this.shakesService.getshake(codigo);
      this.fetchShake(codigo);
    });
  }

  fetchShake(codigo: string) {
    this.shakesService.getShake(codigo).subscribe(data => {
      this.shake = data.map ( e => {
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
      console.log(this.shake);
    });
  }
}
