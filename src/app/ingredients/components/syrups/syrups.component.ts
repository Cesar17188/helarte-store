import { Component, OnInit } from '@angular/core';
import { SalsasService } from 'src/app/core/services/salsas/salsas.service';
import { SYRUP } from 'src/app/core/models/syrup.model';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-syrups',
  templateUrl: './syrups.component.html',
  styleUrls: ['./syrups.component.css']
})
export class SyrupsComponent implements OnInit {

  syrups: SYRUP[];
  data: any;
  img: any;

  constructor(
    private syrupServices: SalsasService,
    private storage: AngularFireStorage,
  ) { }

  ngOnInit(): void {
    this.getSyrups();
  }

  getSyrups() {
    this.syrupServices.getAllSyrups().subscribe(data => {
      this.syrups = data.map( e => {
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
      console.log(this.syrups);
    });
  }

  clickProduct(codigo: string) {
    console.log('producto');
    console.log(codigo);
  }

}
