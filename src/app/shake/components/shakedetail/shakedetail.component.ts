import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AngularFireStorage } from '@angular/fire/storage';
import { ActivatedRoute, Params } from '@angular/router';
import { FRUTA } from 'src/app/core/models/fruta.model';
import { Product } from 'src/app/core/models/product.model';
import { SABOR } from 'src/app/core/models/sabor.model';
import { ShakesService } from 'src/app/core/services/shakes/shakes.service';
import { SaboresService } from 'src/app/core/services/sabores/sabores.service';
import { FrutasService } from 'src/app/core/services/frutas/frutas.service';
import { MatDialog } from '@angular/material/dialog';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { SaboresContainer } from 'src/app/ingredients/containers/sabores/sabores.container';
import { FrutasContainer } from 'src/app/ingredients/containers/frutas/frutas.container';
import { SHAKE } from 'src/app/core/models/shake.model';

@Component({
  selector: 'app-shakedetail',
  templateUrl: './shakedetail.component.html',
  styleUrls: ['./shakedetail.component.css']
})
export class ShakedetailComponent implements OnInit {

  // Variables del shake
  newShake: Product;
  shake: SHAKE[];
  data: any;
  img: any;
  isMilkshake: boolean;
  flagLeche: boolean;
  leche: boolean;

  // Variables de control de sabor de helado
  sabor: SABOR[];
  listaSabores: SABOR[];
  Saimg: any;
  codflavor: string;

   // Vairables de control de fruta
   fruta1: FRUTA[];
   fruta2: FRUTA[];
   frimg: any;
   codfruta: string;
   codfruta2: string;
   listaFrutas: FRUTA[];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private shakesService: ShakesService,
    private saborService: SaboresService,
    private frutasService: FrutasService,
    private storage: AngularFireStorage,
    public dialog: MatDialog,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const codigo = params.codigo;
      this.isMilkshake = shakeorMilk(codigo);
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

  fetchSabor(codigo: string) {
    this.saborService.getSabor(codigo).subscribe(data => {
        this.sabor = data.map ( e => {
        const ref = this.storage.storage.refFromURL(e.payload.doc.data().image);
        this.Saimg = ref.getDownloadURL();
        return {
          codigo: e.payload.doc.data().codigo,
          producto: e.payload.doc.data().producto,
          img: this.Saimg,
          descripcion_corta: e.payload.doc.data().descripcion_corta,
          descripcion_larga: e.payload.doc.data().descripcion_larga,
          precioCompra: e.payload.doc.data().precioCompra
        };
      });
    });
    console.log(this.sabor);
  }

  fetchFruta(codigo: string) {
    this.frutasService.getFruta(codigo).subscribe(data => {
      this.fruta1 = data.map ( e => {
        const ref = this.storage.storage.refFromURL(e.payload.doc.data().image);
        this.frimg = ref.getDownloadURL();
        return {
          codigo: e.payload.doc.data().codigo,
          producto: e.payload.doc.data().producto,
          img: this.frimg,
          descripcion_corta: e.payload.doc.data().descripcion_corta,
          descripcion_larga: e.payload.doc.data().descripcion_larga,
          precioCompra: e.payload.doc.data().precioCompra
        };
      });
    });
  }

  fetchFruta2(codigo: string) {
    this.frutasService.getFruta(codigo).subscribe(data => {
      this.fruta2 = data.map ( e => {
        const ref = this.storage.storage.refFromURL(e.payload.doc.data().image);
        this.frimg = ref.getDownloadURL();
        return {
          codigo: e.payload.doc.data().codigo,
          producto: e.payload.doc.data().producto,
          img: this.frimg,
          descripcion_corta: e.payload.doc.data().descripcion_corta,
          descripcion_larga: e.payload.doc.data().descripcion_larga,
          precioCompra: e.payload.doc.data().precioCompra
        };
      });
    });
  }

  selectFlavor(): void{
    this.sabor = null;
    const dialogRef = this.dialog.open(SaboresContainer, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.codflavor = result;
      this.fetchSabor(this.codflavor);
      console.log(this.sabor);
    });
  }

  aditionFruta(): void{
    this.fruta1 = null;
    const dialogRef = this.dialog.open(FrutasContainer, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.codfruta = result;
      this.fetchFruta(this.codfruta);
    });
  }

  aditionFruta2(): void{
    this.fruta2 = null;
    const dialogRef = this.dialog.open(FrutasContainer, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.codfruta2 = result;
      this.fetchFruta2(this.codfruta2);
    });
  }

  getSabores() {
    if (this.sabor != null){
      this.listaSabores = this.sabor;
    } else {
      this.listaSabores = null;
    }
    return this.listaSabores;
  }

  getFrutas() {
    if (this.fruta1 != null && this.fruta2 != null) {
      this.listaFrutas = [this.fruta1[0], this.fruta2[0]];
    }
    else if (this.fruta1 != null && this.fruta2 == null) {
      this.listaFrutas = this.fruta1;
    }
    else {
      this.listaFrutas = this.fruta2;
    }
    return this.listaFrutas;
  }

  getLeche(){
    if (this.flagLeche){
      return true;
    }
    else {
      return false;
    }
}

  addcart() {
    this.getSabores();
    this.getFrutas();
    this.leche = this.getLeche();
    this.newShake = {
      codigo: this.shake[0].codigo,
      producto: this.shake[0].producto,
      sabores: this.listaSabores,
      fruta: this.listaFrutas,
      leche: this.leche,
      precioVenta: this.shake[0].precioVenta,
      img: this.shake[0].img,
    };
    this.cartService.addCart(this.newShake);
  }

  backClicked() {
    this.location.back();
  }
}


// Función de bandera con booleano para determinar el tipo de crepe
function shakeorMilk(codigo: string){
  if (codigo === 'sh0001'){
    return true;
  } else {
    return false;
  }
}

