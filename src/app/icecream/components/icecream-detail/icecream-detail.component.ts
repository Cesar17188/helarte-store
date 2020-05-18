import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { HeladosService } from '../../../core/services/helados/helados.service';
import { Product } from '../../../product.model';
import { stringify } from 'querystring';
import { SaboresComponent } from '../sabores/sabores.component';
import { SaboresService } from 'src/app/core/services/sabores/sabores.service';


export interface DialogData {
  sabor: Product;
  codflavor: string;
}

@Component({
  selector: 'app-icecream-detail',
  templateUrl: './icecream-detail.component.html',
  styleUrls: ['./icecream-detail.component.css']
})
export class IcecreamDetailComponent implements OnInit {

  helado: Product;
  sabor: Product;
  cono: string;
  codflavor: string;

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

