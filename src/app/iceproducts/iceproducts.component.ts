import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { HeladosService } from '../core/services/helados/helados.service';


@Component({
  selector: 'app-iceproducts',
  templateUrl: './iceproducts.component.html',
  styleUrls: ['./iceproducts.component.css']
})
export class IceproductsComponent implements OnInit {

  helados: Product[];

  constructor(
    private heladosService: HeladosService,
  ) { }

  ngOnInit(): void {
        this.helados = this.heladosService.getAllIceCream();
  }

  clickProduct(codigo: string) {
    console.log('producto');
    console.log(codigo);
  }

}
