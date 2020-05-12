import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { HeladosService } from '../../../core/services/helados/helados.service';
import { Product } from '../../../product.model';
import { stringify } from 'querystring';
import { SaboresComponent } from '../sabores/sabores.component';

@Component({
  selector: 'app-icecream-detail',
  templateUrl: './icecream-detail.component.html',
  styleUrls: ['./icecream-detail.component.css']
})
export class IcecreamDetailComponent implements OnInit {

  helado: Product;
  sabor: string;

  constructor(
    private route: ActivatedRoute,
    private heladosService: HeladosService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {

    this.route.params.subscribe((params: Params) => {
      const codigo = params.codigo;
      this.helado = this.heladosService.getIceCream(codigo);
      this.sabor = sabor(this.helado.codigo);
    });
  }
  selectFlavor(){
    this.dialog.open(SaboresComponent);
  }
}

function sabor(codigo: string){
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

