import { Injectable } from '@angular/core';
import { Product } from '../../../product.model';

@Injectable({
  providedIn: 'root'
})
export class SalsasService {
  salsas: Product [] = [
    {
        codigo: 'sal1',
        image: 'assets/images/hchocolate.jpg',
        producto: 'Crema',
        descripcion_corta: 'Complemento de crema',
        descripcion_larga: 'Complementa tu elección con el sabor de crema',
        stock: 100,
        unidadMedida: 'gramos',
        precioCompra: 15
    },
    {
      codigo: 'sal2',
      image: 'assets/images/hchocolate.jpg',
      producto: 'chocolate',
      descripcion_corta: 'Complemento de chocolate',
      descripcion_larga: 'Complementa tu elección con el sabor de chocolate',
      stock: 100,
      unidadMedida: 'gramos',
      precioCompra: 15
    },
    {
      codigo: 'sal3',
      image: 'assets/images/hchocolate.jpg',
      producto: 'Fresa',
      descripcion_corta: 'Complemento de fresa',
      descripcion_larga: 'Complementa tu elección con el sabor de fresa',
      stock: 100,
      unidadMedida: 'gramos',
      precioCompra: 15
    },
    {
      codigo: 'sal4',
      image: 'assets/images/hchocolate.jpg',
      producto: 'Mangar',
      descripcion_corta: 'Complemento de mangar',
      descripcion_larga: 'Complementa tu elección con el sabor del mangar',
      stock: 100,
      unidadMedida: 'gramos',
      precioCompra: 15
    },
    {
      codigo: 'sal5',
      image: 'assets/images/hchocolate.jpg',
      producto: 'Chicles',
      descripcion_corta: 'Complemento de chicles',
      descripcion_larga: 'Complementa tu elección con el sabor del chicles',
      stock: 100,
      unidadMedida: 'gramos',
      precioCompra: 15
    },
    {
      codigo: 'sal6',
      image: 'assets/images/hchocolate.jpg',
      producto: 'Mani',
      descripcion_corta: 'Complemento de mani',
      descripcion_larga: 'Complementa tu elección con el sabor del mani',
      stock: 100,
      unidadMedida: 'gramos',
      precioCompra: 15
    },
  ];
  constructor() { }

  getAllSalsas() {
    return this.salsas;
  }

  getSalsa(codigo: string) {
    return this.salsas.find(item => codigo === item.codigo);
  }
}
