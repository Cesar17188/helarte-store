import { Pipe, PipeTransform} from '@angular/core';
import { Product } from 'src/app/core/models/product.model';
import { CartService } from 'src/app/core/services/cart/cart.service';

@Pipe({
    name: 'cartrepeat'
})
export class CartPipe implements PipeTransform {
    products: Product[];

    constructor(
        private cartService: CartService){}

    transform(product: any, args?: any): any {
        let total = 0;
        this.cartService.cart$.subscribe(products => {
            products.forEach((producto) => {
                if (producto.codigo === product.codigo){
                    total += 1;
                }
            });
        });
        return total;
    }
}
