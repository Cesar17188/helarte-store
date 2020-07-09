import { Component, OnInit } from '@angular/core';
import { TOPPING } from 'src/app/models/topping.model';
import { ToppingDulceService } from 'src/app/core/services/topping-dulce/topping-dulce.service';

@Component({
  selector: 'app-toppings',
  templateUrl: './toppings.component.html',
  styleUrls: ['./toppings.component.css']
})
export class ToppingsComponent implements OnInit {

  toppingsD: TOPPING[];

  constructor(
    private toppingService: ToppingDulceService
  ) { }

  ngOnInit(): void {
    this.toppingsD = this.toppingService.getAllToppingsD();
  }

  clickProduct(codigo: string) {
    console.log('producto');
    console.log(codigo);
  }

}
