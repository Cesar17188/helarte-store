import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Product } from '@core/models/product.model';
import { BackeriesService } from '@core/services/backeries/backeries.service';

@Component({
  selector: 'app-backeriesproducts',
  templateUrl: './backeriesproducts.container.html',
  styleUrls: ['./backeriesproducts.container.css']
})
// tslint:disable-next-line: component-class-suffix
export class BackeriesproductsContainer implements OnInit {

  backeries: Product[];
  data: any;
  img: any;

  constructor(
  private backeriesService: BackeriesService,
  private storage: AngularFireStorage,
  ) { }

  ngOnInit(): void {
    // this.backeries = this.backeriesService.getAllBackeries();
    this.fetchCrepes();
  }

  fetchCrepes() {
    this.backeriesService.getAllBackeries().subscribe(data => {
      this.backeries = data.map( e => {
        // tslint:disable-next-line: no-string-literal
        const ref = this.storage.storage.refFromURL(e.payload.doc.data()['image']);
        this.img = ref.getDownloadURL();
        return {
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
      console.log(this.backeries);
    });
  }


  clickProduct(codigo: string) {
    console.log('producto');
    console.log(codigo);
  }
}
