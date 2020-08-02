import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-cafes',
  templateUrl: './cafes.component.html',
  styleUrls: ['./cafes.component.css']
})
export class CafesComponent implements OnInit {

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
