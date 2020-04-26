import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/product.model';

@Component({
  selector: 'app-backeries',
  templateUrl: './backeries.component.html',
  styleUrls: ['./backeries.component.css']
})
export class BackeriesComponent implements OnInit {

  @Input() product: Product;
  @Output() productAdd: EventEmitter<any> = new EventEmitter();
  today = new Date();

  constructor() { }

  ngOnInit(): void {
  }

  addcart() {
    console.log('añadir al carrito');
    this.productAdd.emit(this.product.codigo);
}
}
