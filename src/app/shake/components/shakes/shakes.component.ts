import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-shakes',
  templateUrl: './shakes.component.html',
  styleUrls: ['./shakes.component.css']
})
export class ShakesComponent implements OnInit {

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
