import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FRUTA } from 'src/app/core/models/fruta.model';
import { FrutasService } from 'src/app/core/services/frutas/frutas.service';

@Component({
  selector: 'app-frutas',
  templateUrl: './frutas.component.html',
  styleUrls: ['./frutas.component.css']
})
export class FrutasComponent implements OnInit {

  frutas: FRUTA[];
  data: any;
  img: any;

  constructor(
    private frutaService: FrutasService,
    private storage: AngularFireStorage,
  ) { }

  ngOnInit(): void {
    this.getFrutas();
  }

  getFrutas() {
    this.frutaService.getAllFrutas().subscribe(data => {
      this.frutas = data.map( e => {
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
      console.log(this.frutas);
    });
  }

  clickProduct(codigo: string) {
    console.log('producto');
    console.log(codigo);
  }

}
