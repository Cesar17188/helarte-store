import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { HeladosService } from '../../../core/services/helados/helados.service';
import { Product } from '../../../product.model';
import { SaboresComponent } from '../sabores/sabores.component';
import { SaboresService } from 'src/app/core/services/sabores/sabores.service';


export interface DialogData {
  sabor: Product;
  codflavor: string;
}
export interface DialogDatados {
  sabor2: Product;
  codflavor2: string;
}
export interface DialogDatatres {
  sabor3: Product;
  codflavor3: string;
}

@Component({
  selector: 'app-icecream-detail',
  templateUrl: './icecream-detail.component.html',
  styleUrls: ['./icecream-detail.component.css']
})
export class IcecreamDetailComponent implements OnInit {

  helado: Product;
  sabor: Product;
  sabor2: Product;
  sabor3: Product;
  cono: string;
  codflavor: string;
  codflavor2: string;
  codflavor3: string;
  EneFlavorDos: boolean;
  EneFlavorTres: boolean;

  constructor(
    private route: ActivatedRoute,
    private heladosService: HeladosService,
    private saborService: SaboresService,
    public dialog: MatDialog,
  ) {}

  ngOnInit(): void {

    this.route.params.subscribe((params: Params) => {
      const codigo = params.codigo;
      this.helado = this.heladosService.getIceCream(codigo);
      this.cono = cono(codigo);
      this.EneFlavorDos = EneFlavorDos(codigo);
      this.EneFlavorTres = EneFlavorTres(codigo);
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
      console.log( this.sabor );
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
