import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { HeladosService } from '../../../core/services/helados/helados.service';
import { CartService } from '../../../core/services/cart/cart.service';

import { HELADO } from '../../../models/helado.model';
import { SABOR } from 'src/app/models/sabor.model';
import { SYRUP } from 'src/app/models/syrup.model';

import { SaboresComponent } from '../sabores/sabores.component';
import { SaboresService } from 'src/app/core/services/sabores/sabores.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { SalsasService } from 'src/app/core/services/salsas/salsas.service';



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
  cono: string;
  codflavor: string;
  codflavor2: string;
  codflavor3: string;
  EneFlavorDos: boolean;
  EneFlavorTres: boolean;
  data: any;
  img: any;
  flagCrema = false;

  constructor(
    private route: ActivatedRoute,
    private heladosService: HeladosService,
    private saborService: SaboresService,
    private syrupService: SalsasService,
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
    const dialogRef = this.dialog.open(SaboresComponent, {
      width: '50%',
      data: {
        codflavor: this.codflavor,
        sabor: this.saborService.getFlavor(this.codflavor),
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.codflavor = result;
      this.sabor = this.saborService.getFlavor(this.codflavor);
    });
  }

    selectFlavordos(): void{
    const dialogRef = this.dialog.open(SaboresComponent, {
      width: '50%',
      data: {
        codflavor2: this.codflavor2,
        sabor2: this.saborService.getFlavor(this.codflavor2),
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.codflavor2 = result;
      this.sabor2 = this.saborService.getFlavor(this.codflavor2);
      console.log( this.sabor2 );
    });
  }

    selectFlavortres(): void{
    const dialogRef = this.dialog.open(SaboresComponent, {
      width: '50%',
      data: {
        codflavor3: this.codflavor3,
        sabor3: this.saborService.getFlavor(this.codflavor3),
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.codflavor3 = result;
      this.sabor3 = this.saborService.getFlavor(this.codflavor3);
      console.log( this.sabor3 );
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
      sabores: [this.sabor, this.sabor2, this.sabor3],
      syrups: [this.crema],
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

