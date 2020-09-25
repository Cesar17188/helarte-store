import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AngularFireStorage } from '@angular/fire/storage';

import { HeladosService } from '../../../core/services/helados/helados.service';
import { CartService } from '../../../core/services/cart/cart.service';
import { ToppingDulceService } from 'src/app/core/services/topping-dulce/topping-dulce.service';
import { SalsasService } from 'src/app/core/services/salsas/salsas.service';
import { SaboresService } from 'src/app/core/services/sabores/sabores.service';

import { HELADO } from 'src/app/core/models/helado.model';
import { SABOR } from 'src/app/core/models/sabor.model';
import { SYRUP } from 'src/app/core/models/syrup.model';
import { TOPPING } from 'src/app/core/models/topping.model';

import { SaboresComponent } from 'src/app/ingredients/components/sabores/sabores.component';
import { SyrupsComponent } from 'src/app/ingredients/components/syrups/syrups.component';
import { ToppingsComponent } from 'src/app/ingredients/components/toppings/toppings.component';
import { AnyMxRecord } from 'dns';



@Component({
  selector: 'app-icecream-detail',
  templateUrl: './icecream-detail.component.html',
  styleUrls: ['./icecream-detail.component.css']
})
export class IcecreamDetailComponent implements OnInit {

  helado: HELADO[];
  newHelado: HELADO;
  sabor: SABOR[];
  sabor2: SABOR[];
  sabor3: SABOR[];
  listaSabores: SABOR[];
  crema: SYRUP[];
  isCrema: SYRUP;
  syrup: SYRUP[];
  listaSyrups: SYRUP[];
  codSyrup: string;
  toppingD: TOPPING[];
  listaToppingD: TOPPING;
  codToppingD: string;
  cono: string;
  codflavor: string;
  codflavor2: string;
  codflavor3: string;
  EneFlavorDos: boolean;
  EneFlavorTres: boolean;
  flagSyrup: boolean;
  data: any;
  img: any;
  Timg: any;
  Syimg: any;
  Saimg: any;
  flagCrema = false;

  constructor(
    private route: ActivatedRoute,
    private heladosService: HeladosService,
    private saborService: SaboresService,
    private syrupService: SalsasService,
    private toppingService: ToppingDulceService,
    public dialog: MatDialog,
    private storage: AngularFireStorage,
    private cartService: CartService
  ) {}

  ngOnInit(): void {

    this.route.params.subscribe((params: Params) => {
      const codigo = params.codigo;
      this.fetchHelado(codigo);
      this.cono = cono(codigo);
      this.EneFlavorDos = EneFlavorDos(codigo);
      this.EneFlavorTres = EneFlavorTres(codigo);
      this.flagSyrup = addFlavors(codigo);
    });
  }

  fetchHelado(codigo: string) {
    this.heladosService.getHelado(codigo).subscribe(data => {
      this.helado = data.map ( e => {
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
          precioCompra: e.payload.doc.data().precioCompra
        };
      });
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

  fetchSabor2(codigo: string) {
    this.saborService.getSabor(codigo).subscribe(data => {
        this.sabor2 = data.map ( e => {
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
    console.log(this.sabor2);
  }

  fetchSabor3(codigo: string) {
    this.saborService.getSabor(codigo).subscribe(data => {
        this.sabor3 = data.map ( e => {
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
    console.log(this.sabor3);
  }

  addCrema(){
    // return this.syrupService.getSalsa('sal1');
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

  selectFlavor(): void{
    this.sabor = null;
    const dialogRef = this.dialog.open(SaboresComponent, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.codflavor = result;
      // this.sabor = this.saborService.getFlavor(this.codflavor);
      this.fetchSabor(this.codflavor);
      console.log(this.sabor);
    });
  }

  selectFlavordos(): void{
    this.sabor2 = null;
    const dialogRef = this.dialog.open(SaboresComponent, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.codflavor2 = result;
      this.fetchSabor2(this.codflavor2);
      console.log( this.sabor2 );
    });
  }

  selectFlavortres(): void{
    this.sabor3 = null;
    const dialogRef = this.dialog.open(SaboresComponent, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.codflavor3 = result;
      this.fetchSabor3(this.codflavor3);
      console.log( this.sabor3 );
    });
  }

  aditionSyrup(): void{
    this.syrup = null;
    const dialogRef = this.dialog.open(SyrupsComponent, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.codSyrup = result;
      // this.syrup = this.syrupService.getSalsa(this.codSyrup);
      this.fetchSyrup(this.codSyrup);
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

  getSyrups() {

  if (this.syrup != null){
      this.listaSyrups = this.syrup;
    }
    else {
      this.listaSyrups = null;
    }
  return this.listaSyrups;
  }

  getCrema(){
    this.addCrema();
    // let listaCrema: SYRUP[];
    if (this.flagCrema){
      this.isCrema = this.crema[0];

    }
    else {
      this.isCrema = null;
    }


  }

  getSabores() {
    if (this.sabor2 == null && this.sabor3 == null){
      this.listaSabores = this.sabor;
    }
    else if (this.sabor2 != null && this.sabor3 == null){
      this.listaSabores = [this.sabor[0], this.sabor2[0]];
    }
    else{
      this.listaSabores = [this.sabor[0], this.sabor2[0], this.sabor3[0]];
    }
    return this.listaSabores;
  }

  getToppings() {
    if (this.toppingD != null) {
      this.listaToppingD = this.toppingD[0];
    }
    else {
      this.listaToppingD = null;
    }
    return this.listaToppingD;
  }

  addcart() {
    this.getCrema();
    this.getSyrups();
    this.getSabores();
    this.getToppings();
    this.newHelado = {
      codigo: this.helado[0].codigo,
      producto: this.helado[0].producto,
      // sabores: [this.sabor[0], this.sabor2[0], this.sabor3[0]],
      sabores: this.listaSabores,
      // syrups: [this.crema[0], this.syrup[0]],
      syrups: this.listaSyrups,
      crema: this.isCrema,
      // topping: this.toppingD[0],
      topping: this.listaToppingD,
      precioVenta: this.helado[0].precioVenta,
      img: this.helado[0].img,
    };
    this.cartService.addCart(this.newHelado);
  }
}

function cono(codigo: string){
  let title: string;
  switch (codigo){
    case 'h0002':
      title = 'Sabores';
      break;
    case 'h0004':
      title = 'Sabores';
      break;
    case 'h0005':
      title = 'Sabores';
      break;
    case 'h0006':
      title = 'Sabores';
      break;
    default:
      title = 'Sabor';
      break;
  }
  return title;
}

function EneFlavorDos(codigo: string){
  let flag: boolean;
  switch (codigo){
    case 'h0002':
      flag = true;
      break;
    case 'h0004':
      flag = true;
      break;
    case 'h0005':
      flag = true;
      break;
    case 'h0006':
      flag = true;
      break;
    default:
      flag = false;
      break;
  }
  return flag;
}


// Función de bandera con booleano para habilitar el sabor tres
function EneFlavorTres(codigo: string){
  let flag: boolean;
  switch (codigo){
    case 'h0005':
      flag = true;
      break;
    case 'h0006':
      flag = true;
      break;
    default:
      flag = false;
      break;
  }
  return flag;
}

function addFlavors(codigo: string){
  let flag: boolean;
  switch (codigo){
    case 'h0003':
      flag = true;
      break;
    case 'h0004':
      flag = true;
      break;
    case 'h0005':
      flag = true;
      break;
    default:
      flag = false;
      break;
  }
  return flag;
}

