import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';
import { BackeriesService } from '../../../core/services/backeries/backeries.service';
import { ActivatedRoute, Params } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { TOPPING } from 'src/app/core/models/topping.model';
import { ToppingDulceService } from 'src/app/core/services/topping-dulce/topping-dulce.service';
import { MatDialog } from '@angular/material/dialog';
import { ToppingsComponent } from 'src/app/ingredients/components/toppings/toppings.component';

@Component({
  selector: 'app-bakerie-detail',
  templateUrl: './bakerie-detail.component.html',
  styleUrls: ['./bakerie-detail.component.css']
})
export class BakerieDetailComponent implements OnInit {

  backerie: Product[];
  data: any;
  img: any;
  Timg: any;
  toppingD: TOPPING[];
  codToppingD: string;

  constructor(
    private route: ActivatedRoute,
    private bakeriesService: BackeriesService,
    private storage: AngularFireStorage,
    private toppingService: ToppingDulceService,
    public dialog: MatDialog,
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

  fetchToppingD(codigo: string) {
    this.toppingService.getToppingD(codigo).subscribe(data => {
      this.toppingD = data.map ( e => {
        const ref = this.storage.storage.refFromURL(e.payload.doc.data().image);
        this.Timg = ref.getDownloadURL();
        return {
          codigo: e.payload.doc.data().codigo,
          producto: e.payload.doc.data().producto,
          img: this.Timg,
          descripcion_corta: e.payload.doc.data().descripcion_corta,
          descripcion_larga: e.payload.doc.data().descripcion_larga,
          preciocompra: e.payload.doc.data().precioCompra
        };
      });
    });
  }

  aditionToping(): void{
    this.toppingD = null;
    const dialogRef = this.dialog.open(ToppingsComponent, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.codToppingD = result;
      // this.toppingD = this.toppingService.getToppingD(this.codToppingD);
      this.fetchToppingD(this.codToppingD);
    });
  }
}
