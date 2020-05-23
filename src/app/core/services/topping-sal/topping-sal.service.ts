import { Injectable } from '@angular/core';
import { Product } from '../../../product.model';

@Injectable({
  providedIn: 'root'
})
export class ToppingSalService {
  toppingS: Product [] = [
    {
        codigo: 'ts1',
        image: 'assets/images/hchocolate.jpg',
        producto: 'Queso',
        descripcion_corta: 'Complemento de queso',
        description_larga: 'Complementa tu elección con el sabor de queso',
        stock: 100,
        unidadMedida: 'gramos',
        precioCompra: 15
    },
    {
      codigo: 'ts2',
      image: 'assets/images/hchocolate.jpg',
      producto: 'Salami',
      descripcion_corta: 'Complemento de salami',
      description_larga: 'Complementa tu elección con el sabor de salami',
      stock: 100,
      unidadMedida: 'unidad',
      precioCompra: 15
    },
    {
      codigo: 'ts3',
      image: 'assets/images/hchocolate.jpg',
      producto: 'Peperoni',
      descripcion_corta: 'Complemento de peperoni',
      description_larga: 'Complementa tu elección con el sabor de peperoni',
      stock: 100,
      unidadMedida: 'unidad',
      precioCompra: 15
    },
    {
      codigo: 'ts4',
      image: 'assets/images/hchocolate.jpg',
      producto: 'Jamón',
      descripcion_corta: 'Complemento de jamón',
      description_larga: 'Complementa tu elección con el sabor del jamón',
      stock: 100,
      unidadMedida: 'unidad',
      precioCompra: 15
    },
  ];
  constructor() { }

  getAllToppingsS() {
    return this.toppingS;
  }

  getToppingS(codigo: string) {
    return this.toppingS.find(item => codigo === item.codigo);
  }
}
