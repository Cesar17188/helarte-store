import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { CommonModule } from '@angular/common';

import { HeladosService } from '../../../core/services/helados/helados.service';
import { Product } from '../../../product.model';
import { stringify } from 'querystring';

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
    private heladosService: HeladosService
  ) {}

  ngOnInit(): void {

    this.route.params.subscribe((params: Params) => {
      const codigo = params.codigo;
      this.helado = this.heladosService.getIceCream(codigo);
      this.sabor = sabor(this.helado.codigo);
    });
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