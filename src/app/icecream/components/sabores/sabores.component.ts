import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product.model';
import { SaboresService } from 'src/app/core/services/sabores/sabores.service';

@Component({
  selector: 'app-sabores',
  templateUrl: './sabores.component.html',
  styleUrls: ['./sabores.component.css']
})
export class SaboresComponent implements OnInit {

  sabores: Product[];

  constructor(
    private saboresService: SaboresService) { }

  ngOnInit(): void {
    this.sabores = this.saboresService.getAllFlavor();
  }

  clickProduct(codigo: string) {
    console.log('producto');
    console.log(codigo);
  }

}

