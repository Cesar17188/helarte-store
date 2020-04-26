import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';

import { HeladosService } from '../../../core/services/helados/helados.service';
import { Product } from '../../../product.model';

@Component({
  selector: 'app-icecream-detail',
  templateUrl: './icecream-detail.component.html',
  styleUrls: ['./icecream-detail.component.css']
})
export class IcecreamDetailComponent implements OnInit {

  helado: Product;

  constructor(
    private route: ActivatedRoute,
    private heladosService: HeladosService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const codigo = params.codigo;
      this.helado = this.heladosService.getIceCream(codigo);
    });
  }

}
