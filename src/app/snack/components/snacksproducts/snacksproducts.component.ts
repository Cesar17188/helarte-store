import { Component, OnInit } from '@angular/core';
import { Product } from './../../../product.model';
import { SnacksService } from './../../../core/services/snacks/snacks.service';

@Component({
  selector: 'app-snacksproducts',
  templateUrl: './snacksproducts.component.html',
  styleUrls: ['./snacksproducts.component.css']
})
export class SnacksproductsComponent implements OnInit {

  snacks: Product[];
  constructor(
    private snacksService: SnacksService
  ) { }

  ngOnInit(): void {
    this.snacks = this.snacksService.getAllSnacks();
  }
  clickProduct(codigo: string) {
    console.log('producto');
    console.log(codigo);
  }
}
