import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-snacks',
  templateUrl: './snacks.component.html',
  styleUrls: ['./snacks.component.css']
})
export class SnacksComponent implements OnInit {

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
