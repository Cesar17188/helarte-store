import { Injectable } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';

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
        descripcion_larga: 'Complementa tu elección con el sabor de queso',
        stock: 100,
        unidadMedida: 'gramos',
        precioCompra: 15
    },
    {
      codigo: 'ts2',
      image: 'assets/images/hchocolate.jpg',
      producto: 'Salami',
      descripcion_corta: 'Complemento de salami',
      descripcion_larga: 'Complementa tu elección con el sabor de salami',
      stock: 100,
      unidadMedida: 'unidad',
      precioCompra: 15
    },
    {
      codigo: 'ts3',
      image: 'assets/images/hchocolate.jpg',
      producto: 'Pollo',
      descripcion_corta: 'Complemento de pollo',
      descripcion_larga: 'Complementa tu elección con el sabor de pollo',
      stock: 100,
      unidadMedida: 'unidad',
      precioCompra: 15
    },
    {
      codigo: 'ts4',
      image: 'assets/images/hchocolate.jpg',
      producto: 'Jamón',
      descripcion_corta: 'Complemento de jamón',
      descripcion_larga: 'Complementa tu elección con el sabor del jamón',
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
