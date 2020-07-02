import { Component, OnInit } from '@angular/core';
import { HeladosService } from 'src/app/core/services/helados/helados.service';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-lista-helados',
  templateUrl: './lista-helados.component.html',
  styleUrls: ['./lista-helados.component.css']
})
export class ListaHeladosComponent implements OnInit {
  helados = [];
  img: any;
  data: any;
  displayedColumns: string[] = ['codigo', 'helado', 'precio', 'actions'];

  constructor(
    private heladosService: HeladosService,
    private storage: AngularFireStorage
  ) { }

  ngOnInit(): void {
    this.getHelados();
  }

  getHelados() {
    this.heladosService.getHelados().subscribe(data => {
      this.helados = data.map( e => {
        const ref = this.storage.storage.refFromURL(e.payload.doc.data().image);
        this.img = ref.getDownloadURL();
        return {
          id: e.payload.doc.id,
          codigo: e.payload.doc.data().codigo,
          producto: e.payload.doc.data().producto,
          precioVenta: e.payload.doc.data().precioVenta,
          img: this.img,
          descripcion_corta: e.payload.doc.data().descripcion_corta,
          descripcion_larga: e.payload.doc.data().descripcion_larga
        };
      });
      console.log(this.helados);
    });
  }

  deleteHelado(documentId: string) {
    this.heladosService.deleteHelado(documentId);
  }

}
