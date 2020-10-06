import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { MatDialog } from '@angular/material/dialog';

import { ToppingDulceService } from '@core/services/topping-dulce/topping-dulce.service';
import { BackeriesService } from '@core/services/backeries/backeries.service';
import { SalsasService } from '@core/services/salsas/salsas.service';
import { SaboresService } from '@core/services/sabores/sabores.service';
import { FrutasService } from '@core/services/frutas/frutas.service';
import { ToppingSalService } from '@core/services/topping-sal/topping-sal.service';
import { CartService } from '@core/services/cart/cart.service';

import { ToppingsContainer } from '@ingredients/containers/toppings/toppings.container';
import { SyrupsContainer } from '@ingredients/containers/syrups/syrups.container';
import { SaboresContainer } from '@ingredients/containers/sabores/sabores.container';
import { FrutasContainer } from '@ingredients/containers/frutas/frutas.container';
import { ToppingsSalContainer } from '@ingredients/containers/toppings-sal/toppings-sal.container';

import { Product } from '@core/models/product.model';
import { TOPPING } from '@core/models/topping.model';
import { SYRUP } from '@core/models/syrup.model';
import { SABOR } from '@core/models/sabor.model';
import { FRUTA } from '@core/models/fruta.model';
import { CREPE } from '@core/models/crepe.model';


@Component({
  selector: 'app-bakerie-detail',
  templateUrl: './bakerie-detail.component.html',
  styleUrls: ['./bakerie-detail.component.css']
})
export class BakerieDetailComponent implements OnInit {

  // Variables de control de Crepe
  newCrepe: Product;
  crepeDulce: boolean;
  backerie: Product[];
  data: any;
  img: any;

  // Variables de control de Toppings Dulce y sal
  Timg: any;
  toppingD: TOPPING[];
  codToppingD: string;
  Tsimg: any;
  listaToppingsD: TOPPING;
  toppingS: TOPPING[];
  codToppingS: string;
  toppingS2: TOPPING[];
  codToppingS2: string;
  toppingS3: TOPPING[];
  codToppingS3: string;
  listaToppingsS: TOPPING[];

  // Variables de control de syrups
  codSyrup: string;
  syrup: SYRUP[];
  Syimg: any;
  listaSyrups: SYRUP[];

  // Variables de control de sabor de helado
  sabor: SABOR[];
  listaSabores: SABOR[];
  Saimg: any;
  codflavor: string;

  // Vairables de control de fruta
  fruta: FRUTA[];
  frimg: any;
  codfruta: string;
  listaFrutas: FRUTA[];

  // Variables de control de crema
  crema: SYRUP[];
  isCrema: SYRUP;
  flagCrema = false;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private bakeriesService: BackeriesService,
    private saborService: SaboresService,
    private frutasService: FrutasService,
    private storage: AngularFireStorage,
    private toppingDulceService: ToppingDulceService,
    private toppingSalService: ToppingSalService,
    private syrupService: SalsasService,
    public dialog: MatDialog,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const codigo = params.codigo;
      this.crepeDulce = dulceSal(codigo);
      this.fetchBackerie(codigo);
    });
  }

// Recuperación de la información del servicio
// y asignación de variables para sabor de helado, topping, syrup y crema

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

  fetchToppingD(codigo: string) {
    this.toppingDulceService.getToppingD(codigo).subscribe(data => {
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
    const dialogRef = this.dialog.open(ToppingsContainer, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.codToppingD = result;
      this.fetchToppingD(this.codToppingD);
    });
  }

  fetchToppingS(codigo: string){
    this.toppingSalService.getToppingS(codigo).subscribe(data => {
      this.toppingS = data.map ( e => {
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

// Selectores en Dialogs para sabores, syrups y toppings

  aditionTopingSal(): void{
    this.toppingS = null;
    const dialogRef = this.dialog.open(ToppingsSalContainer, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.codToppingS = result;
      this.fetchToppingS(this.codToppingS);
    });
  }

  fetchToppingS2(codigo: string){
    this.toppingSalService.getToppingS(codigo).subscribe(data => {
      this.toppingS2 = data.map ( e => {
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

  aditionTopingSal2(): void{
    this.toppingS2 = null;
    const dialogRef = this.dialog.open(ToppingsSalContainer, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.codToppingS2 = result;
      this.fetchToppingS2(this.codToppingS2);
    });
  }

  fetchToppingS3(codigo: string){
    this.toppingSalService.getToppingS(codigo).subscribe(data => {
      this.toppingS3 = data.map ( e => {
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

  aditionTopingSal3(): void{
    this.toppingS3 = null;
    const dialogRef = this.dialog.open(ToppingsSalContainer, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.codToppingS3 = result;
      this.fetchToppingS3(this.codToppingS3);
    });
  }


  fetchSyrup(codigo: string) {
    this.syrupService.getSyrup(codigo).subscribe(data => {
      this.syrup = data.map ( e => {
        const ref = this.storage.storage.refFromURL(e.payload.doc.data().image);
        this.Syimg = ref.getDownloadURL();
        return {
          codigo: e.payload.doc.data().codigo,
          producto: e.payload.doc.data().producto,
          img: this.Syimg,
          descripcion_corta: e.payload.doc.data().descripcion_corta,
          descripcion_larga: e.payload.doc.data().descripcion_larga,
          precioCompra: e.payload.doc.data().precioCompra
        };
      });
    });
  }

  aditionSyrup(): void{
    this.syrup = null;
    const dialogRef = this.dialog.open(SyrupsContainer, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.codSyrup = result;
      this.fetchSyrup(this.codSyrup);
    });
  }

  fetchFruta(codigo: string) {
    this.frutasService.getFruta(codigo).subscribe(data => {
      this.fruta = data.map ( e => {
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

  aditionFruta(): void{
    this.fruta = null;
    const dialogRef = this.dialog.open(FrutasContainer, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.codfruta = result;
      this.fetchFruta(this.codfruta);
    });
  }

  addCrema(){
    this.syrupService.getCrema().subscribe(data => {
    this.crema = data.map ( e => {
      return {
          codigo: e.payload.doc.data().codigo,
          producto: e.payload.doc.data().producto,
          descripcion_corta: e.payload.doc.data().descripcion_corta,
          descripcion_larga: e.payload.doc.data().descripcion_larga,
          precioCompra: e.payload.doc.data().precioCompra,
          precioVenta: e.payload.doc.data().precioVenta
        };
      });
    console.log(this.crema);
    });
  }

  // asignación de objetos a variables de asignación
  // para el nuevo objeto Helado

  getCrema(){
      this.addCrema();
      if (this.flagCrema){
        this.isCrema = this.crema[0];

      }
      else {
        this.isCrema = null;
      }
  }

    getSyrups() {

    if (this.syrup != null){
        this.listaSyrups = this.syrup;
      }
      else {
        this.listaSyrups = null;
      }
    return this.listaSyrups;
    }

    getSabores() {
      if (this.sabor != null){
        this.listaSabores = this.sabor;
      } else {
        this.listaSabores = null;
      }
      return this.listaSabores;
    }

    getToppingsD() {
      if (this.toppingD != null) {
        this.listaToppingsD = this.toppingD[0];
      }
      else {
        this.listaToppingsD = null;
      }
    }

    getFrutas() {
      if (this.fruta != null) {
        this.listaFrutas = this.fruta;
      }
      else {
        this.listaFrutas = null;
      }
      return this.listaFrutas;
    }

    getToppingsS() {
      if (this.toppingS2 == null && this.toppingS3 == null){
        this.listaToppingsS = this.toppingS;
      }
      else if (this.toppingS2 != null && this.toppingS3 == null){
        this.listaToppingsS = [this.toppingS[0], this.toppingS2[0]];
      }
      else{
        this.listaToppingsS = [this.toppingS[0], this.toppingS2[0], this.toppingS3[0]];
      }
      return this.listaToppingsS;
    }

  // Agrega el objeto crepe a la tienda

    addcart() {
      this.getCrema();
      this.getSyrups();
      this.getSabores();
      this.getToppingsD();
      this.getToppingsS();
      this.getFrutas();
      this.newCrepe = {
        codigo: this.backerie[0].codigo,
        producto: this.backerie[0].producto,
        sabores: this.listaSabores,
        syrups: this.listaSyrups,
        crema: this.isCrema,
        toppingsD: this.listaToppingsD,
        toppingsS: this.listaToppingsS,
        fruta: this.listaFrutas,
        precioVenta: this.backerie[0].precioVenta,
        img: this.backerie[0].img,
      };
      this.cartService.addCart(this.newCrepe);
    }


  backClicked() {
    this.location.back();
  }

}

// Función de bandera con booleano para determinar el tipo de crepe
function dulceSal(codigo: string){
  if (codigo === 'cp0001'){
    return true;
  } else {
    return false;
  }
}

