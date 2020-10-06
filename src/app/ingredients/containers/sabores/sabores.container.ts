import { Component, OnInit } from '@angular/core';
import { SaboresService } from 'src/app/core/services/sabores/sabores.service';
import { SABOR } from 'src/app/core/models/sabor.model';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-sabores',
  templateUrl: './sabores.container.html',
  styleUrls: ['./sabores.container.css']
})
// tslint:disable-next-line: component-class-suffix
export class SaboresContainer implements OnInit {

  sabores: SABOR[];
  data: any;
  img: any;

  constructor(
    private saboresService: SaboresService,
    private storage: AngularFireStorage,
    ) { }

  ngOnInit(): void {
    this.fetchSabores();
  }

  fetchSabores() {
    this.saboresService.getAllSabores().subscribe(data => {
      this.sabores = data.map( e => {
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
      console.log(this.sabores);
    });
  }

  clickProduct(codigo: string) {
    console.log('producto');
    console.log(codigo);
  }

}

