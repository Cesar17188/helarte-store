import { Injectable } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class FrutasService {
  frutas: Product [] = [
    {
        codigo: 'fr1',
        image: 'assets/images/hchocolate.jpg',
        producto: 'Durazno',
        descripcion_corta: 'Complemento de durazno',
        descripcion_larga: 'Complementa tu elección con el sabor de durazno',
        stock: 100,
        unidadMedida: 'gramos',
        precioCompra: 15
    },
    {
      codigo: 'fr2',
      image: 'assets/images/hchocolate.jpg',
      producto: 'Fresa',
      descripcion_corta: 'Complemento de fresa',
      descripcion_larga: 'Complementa tu elección con el sabor de fresa',
      stock: 100,
      unidadMedida: 'gramos',
      precioCompra: 15
    },
    {
      codigo: 'fr3',
      image: 'assets/images/hchocolate.jpg',
      producto: 'Uva',
      descripcion_corta: 'Complemento de uva',
      descripcion_larga: 'Complementa tu elección con el sabor de uva',
      stock: 100,
      unidadMedida: 'gramos',
      precioCompra: 15
    },
    {
      codigo: 'fr4',
      image: 'assets/images/hchocolate.jpg',
      producto: 'Mango',
      descripcion_corta: 'Complemento de mango',
      descripcion_larga: 'Complementa tu elección con el sabor del mango',
      stock: 100,
      unidadMedida: 'gramos',
      precioCompra: 15
    },
    {
      codigo: 'fr5',
      image: 'assets/images/hchocolate.jpg',
      producto: 'Banana',
      descripcion_corta: 'Complemento de banana',
      descripcion_larga: 'Complementa tu elección con el sabor del banana',
      stock: 100,
      unidadMedida: 'gramos',
      precioCompra: 15
    },
  ];
  constructor() { }

  getAllFrutas() {
    return this.frutas;
  }

  getFruta(codigo: string) {
    return this.frutas.find(item => codigo === item.codigo);
  }
}
