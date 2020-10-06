import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { BackeriesService } from '@core/services/backeries/backeries.service';

@Component({
  selector: 'app-lista-crepes',
  templateUrl: './lista-crepes.component.html',
  styleUrls: ['./lista-crepes.component.css']
})
export class ListaCrepesComponent implements OnInit {

  crepes = [];
  img: any;
  data: any;
  displayedColumns: string[] = ['codigo', 'crepe', 'precio', 'actions'];

  constructor(
    private crepeService: BackeriesService,
    private storage: AngularFireStorage
  ) { }

  ngOnInit(): void {
    this.fetchCrepes();
  }

  fetchCrepes() {
    this.crepeService.getAllBackeries().subscribe(data => {
      this.crepes = data.map( e => {
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
      console.log(this.crepes);
    });
  }

  deleteCrepe(documentId: string) {
    this.crepeService.deleteBackerie(documentId);
  }

}
