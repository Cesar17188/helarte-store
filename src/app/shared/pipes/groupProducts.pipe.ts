import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '@core/models/product.model';


@Pipe({
    name: 'groupProducts'
})
export class GroupProductsPipe implements PipeTransform {

    groupedProducts: any[] = [];

    transform(value: Product[]): any {
        value.forEach(product => {
            // tslint:disable-next-line: triple-equals
            if (this.groupedProducts.length == 0) {
                this.groupedProducts.push(Object.assign(product, {quantity: 1}));
            } else {
                // tslint:disable-next-line: triple-equals
                const repeatedProduct = this.groupedProducts.findIndex(p => p.codigo == product.codigo);
                // tslint:disable-next-line: triple-equals
                if (repeatedProduct == -1) {
                    this.groupedProducts.push(Object.assign(product, {quantity: 1}));
                } else {
                    this.groupedProducts[repeatedProduct].quantity += 1;
                }
            }
        });

        return this.groupedProducts;
    }
}
