import { Component, OnInit } from '@angular/core';
import { Product } from '../../../product.model';
import { CafesService } from '../../../core/services/cafes/cafes.service';


@Component({
  selector: 'app-cafesproducts',
  templateUrl: './cafesproducts.component.html',
  styleUrls: ['./cafesproducts.component.css']
})
export class CafesproductsComponent implements OnInit {

  cafes: Product[];

  constructor(
    private cafesService: CafesService
  ) { }

  ngOnInit(): void {
    this.cafes = this.cafesService.getAllCafes();
  }
  clickProduct(codigo: string) {
    console.log('producto');
    console.log(codigo);
  }
}
