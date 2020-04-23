import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class SnacksService {
  snacks: Product[] = [
    {
        codigo: 'h1',
        image: 'assets/images/hchocolate.jpg',
        producto: 'Cono simple',
        sabores: [],
        descripcion_corta: 'Cono waffer con un sabor de helado',
        description_larga: 'Cono wafer con un sabor de helado a tu elección',
        unidadMedida: 'unidad',
        precioVenta: 1.30
    },
    {
      codigo: 'h2',
      image: 'assets/images/hvainilla.jpg',
      producto: 'Cono doble',
      sabores: [],
      descripcion_corta: 'Cono waffer con dos sabores de helado',
      unidadMedida: 'unidad',
      precioVenta: 2.25
  },
  {
    codigo: 'h3',
    image: 'assets/images/hchocolate.jpg',
    producto: 'Tulipan Simple',
    sabores: [],
    descripcion_corta: 'Tulipan waffer con un sabor de helado',
    unidadMedida: 'unidad',
    precioVenta: 1.50
  },
  {
    codigo: 'h4',
    image: 'assets/images/hchocolate.jpg',
    producto: 'Tulipan Doble',
    sabores: [],
    descripcion_corta: 'Tulipan waffer con dos sabores de helado',
    unidadMedida: 'unidad',
    precioVenta: 1.50
  },
  {
    codigo: 'h5',
    image: 'assets/images/hchocolate.jpg',
    producto: 'Copa',
    sabores: [],
    descripcion_corta: 'Copa con varios sabores de helado',
    unidadMedida: 'unidad',
    precioVenta: 2.95
  },
  {
    codigo: 'h6',
    image: 'assets/images/hchocolate.jpg',
    producto: 'Milshake',
    sabores: [],
    descripcion_corta: 'Vaso con un combinación de un sabor de helado con leche',
    unidadMedida: 'unidad',
    precioVenta: 2.50
  },
];
  constructor() { }

  getAllIceCream() {
    return this.snacks;
  }

  getIceCream(codigo: string){
    return this.snacks.find(item => codigo === item.codigo);
  }
}
