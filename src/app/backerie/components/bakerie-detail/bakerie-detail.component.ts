import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';
import { BackeriesService } from '../../../core/services/backeries/backeries.service';
import { ActivatedRoute, Params } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-bakerie-detail',
  templateUrl: './bakerie-detail.component.html',
  styleUrls: ['./bakerie-detail.component.css']
})
export class BakerieDetailComponent implements OnInit {

  backerie: Product[];
  data: any;
  img: any;

  constructor(
    private route: ActivatedRoute,
    private bakeriesService: BackeriesService,
    private storage: AngularFireStorage,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const codigo = params.codigo;
      // this.backerie = this.bakeriesService.getBackerie(codigo);
      this.fetchBackerie(codigo);
    });
  }

  fetchBackerie(codigo: string) {
    this.bakeriesService.getBackerie(codigo).subscribe(data => {
      this.backerie = data.map ( e => {
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
      console.log(this.backerie);
    });
  }
}
