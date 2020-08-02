import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';


@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent {

    @Input() product: Product;
    @Output() productAdd: EventEmitter<any> = new EventEmitter();

    today = new Date();
    addcart() {
        console.log('añadir al carrito');
        this.productAdd.emit(this.product.codigo);
    }
}
