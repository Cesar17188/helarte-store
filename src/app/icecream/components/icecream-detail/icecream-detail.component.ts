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
import { SaboresComponent } from '../sabores/sabores.component';
import { SyrupsComponent } from '../syrups/syrups.component';
import { ToppingsComponent } from '../toppings/toppings.component';



@Component({
  selector: 'app-icecream-detail',
  templateUrl: './icecream-detail.component.html',
  styleUrls: ['./icecream-detail.component.css']
})
export class IcecreamDetailComponent implements OnInit {

  helado: HELADO[];
  newHelado: HELADO;
  sabor: SABOR;
  sabor2: SABOR;
  sabor3: SABOR;
  crema: SYRUP;
  syrup: SYRUP;
  codSyrup: string;
  toppingD: TOPPING;
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

  selectFlavor(): void{
    this.sabor = null;
    const dialogRef = this.dialog.open(SaboresComponent, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.codflavor = result;
      this.sabor = this.saborService.getFlavor(this.codflavor);
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
      this.sabor2 = this.saborService.getFlavor(this.codflavor2);
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
      this.sabor3 = this.saborService.getFlavor(this.codflavor3);
      console.log( this.sabor3 );
    });
  }

  aditionSyrup(): void{
    const dialogRef = this.dialog.open(SyrupsComponent, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.codSyrup = result;
      this.syrup = this.syrupService.getSalsa(this.codSyrup);
    });
  }

  aditionToping(): void{
    const dialogRef = this.dialog.open(ToppingsComponent, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.codToppingD = result;
      this.toppingD = this.toppingService.getToppingD(this.codToppingD);
    });
  }

  addCrema(): SYRUP {
        return this.syrupService.getSalsa('sal1');
  }

  addcart() {
    if (this.flagCrema) {
      this.crema = this.addCrema();
    } else {
      this.crema = null;
    }
    this.newHelado = {
      codigo: this.helado[0].codigo,
      producto: this.helado[0].producto,
      crema: this.crema,
      sabores: [this.sabor, this.sabor2, this.sabor3],
      syrups: [this.syrup],
      topping: this.toppingD,
      precioVenta: this.helado[0].precioVenta,
      img: this.helado[0].img,
    };
    this.cartService.addCart(this.newHelado);
  }
}

function cono(codigo: string){
  let title: string;
  switch (codigo){
    case 'h2':
      title = 'Sabores';
      break;
    case 'h4':
      title = 'Sabores';
      break;
    case 'h5':
      title = 'Sabores';
      break;
    case 'h6':
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
    case 'h2':
      flag = true;
      break;
    case 'h4':
      flag = true;
      break;
    case 'h5':
      flag = true;
      break;
    case 'h6':
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
    case 'h5':
      flag = true;
      break;
    case 'h6':
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
    case 'h3':
      flag = true;
      break;
    case 'h4':
      flag = true;
      break;
    case 'h5':
      flag = true;
      break;
    default:
      flag = false;
      break;
  }
  return flag;
}

