
import { Injectable } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';
@Injectable({
  providedIn: 'root'
})
export class ToppingDulceService {

  toppingD: Product [] = [
    {
        codigo: 'td1',
        image: 'assets/images/hchocolate.jpg',
        producto: 'Oreo',
        descripcion_corta: 'Complemento de galleta oreo',
        descripcion_larga: 'Complementa tu elección con el sabor de la galleta oreo',
        stock: 100,
        unidadMedida: 'unidad',
        precioCompra: 15
    },
    {
      codigo: 'td2',
      image: 'assets/images/hchocolate.jpg',
      producto: 'Chispas de chocolate',
      descripcion_corta: 'Complemento de chispas de chocolate',
      descripcion_larga: 'Complementa tu elección con el sabor de chispas de chocolate',
      stock: 100,
      unidadMedida: 'gramos',
      precioCompra: 15
    },
    {
      codigo: 'td3',
      image: 'assets/images/hchocolate.jpg',
      producto: 'Grajeas',
      descripcion_corta: 'Complemento de grajeas',
      descripcion_larga: 'Complementa tu elección con el sabor de grajeas',
      stock: 100,
      unidadMedida: 'gramos',
      precioCompra: 15
    },
    {
      codigo: 'td4',
      image: 'assets/images/hchocolate.jpg',
      producto: 'Coco',
      descripcion_corta: 'Complemento de coco',
      descripcion_larga: 'Complementa tu elección con el sabor del Coco',
      stock: 100,
      unidadMedida: 'gramos',
      precioCompra: 15
    },
    {
      codigo: 'td5',
      image: 'assets/images/hchocolate.jpg',
      producto: 'Granola',
      descripcion_corta: 'Complemento de granola',
      descripcion_larga: 'Complementa tu elección con el sabor de la granola',
      stock: 100,
      unidadMedida: 'gramos',
      precioCompra: 15
    },
    {
      codigo: 'td6',
      image: 'assets/images/hchocolate.jpg',
      producto: 'Arándanos',
      descripcion_corta: 'Complemento de arándanos',
      descripcion_larga: 'Complementa tu elección con el sabor de arándanos',
      stock: 100,
      unidadMedida: 'gramos',
      precioCompra: 15
    },
    {
      codigo: 'td7',
      image: 'assets/images/hchocolate.jpg',
      producto: 'Almendras',
      descripcion_corta: 'Complemento de almendras',
      descripcion_larga: 'Complementa tu elección con el sabor de almendras',
      stock: 100,
      unidadMedida: 'gramos',
      precioCompra: 15
    },
    {
      codigo: 'td8',
      image: 'assets/images/hchocolate.jpg',
      producto: 'Nueces',
      descripcion_corta: 'Complemento de nueces',
      descripcion_larga: 'Complementa tu elección con el sabor de nueces',
      stock: 100,
      unidadMedida: 'gramos',
      precioCompra: 15
     },
  ];
  constructor() { }

  getAllToppingsD() {
    return this.toppingD;
  }

  getToppingD(codigo: string) {
    return this.toppingD.find(item => codigo === item.codigo);
  }
}
