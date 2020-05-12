import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../product.model';

@Component({
  selector: 'app-flavor',
  templateUrl: './flavor.component.html',
  styleUrls: ['./flavor.component.css']
})
export class FlavorComponent implements OnInit {
  @Input() product: Product;
  @Output() productAdd: EventEmitter<any> = new EventEmitter();

  today = new Date();
  addcart() {
      console.log('añadir al carrito');
      this.productAdd.emit(this.product.codigo);
  }
  ngOnInit(): void {
  }

}
