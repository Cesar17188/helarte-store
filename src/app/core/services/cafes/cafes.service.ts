import { Injectable } from '@angular/core';
import { Product } from '../../../product.model';

@Injectable({
  providedIn: 'root'
})
export class CafesService {
  cafes: Product[] = [
    {
      codigo: 'c1',
      image: 'assets/images/hchocolate.jpg',
      producto: 'Expresso',
      sabores: [],
      descripcion_corta: 'Cono waffer con un sabor de helado',
      description_larga: 'Cono wafer con un sabor de helado a tu elección',
      unidadMedida: 'unidad',
      precioVenta: 1.20
    },
    {
      codigo: 'c2',
      image: 'assets/images/hvainilla.jpg',
      producto: 'Americano',
      sabores: [],
      descripcion_corta: 'Cono waffer con dos sabores de helado',
      unidadMedida: 'unidad',
      precioVenta: 1.25
  },
  {
    codigo: 'c3',
    image: 'assets/images/hchocolate.jpg',
    producto: 'Carajillo',
    sabores: [],
    descripcion_corta: 'Tulipan waffer con un sabor de helado',
    unidadMedida: 'unidad',
    precioVenta: 1.75
  },
  {
    codigo: 'c4',
    image: 'assets/images/hchocolate.jpg',
    producto: 'Tostado',
    sabores: [],
    descripcion_corta: 'Tulipan waffer con dos sabores de helado',
    unidadMedida: 'unidad',
    precioVenta: 1.50
  },
  {
    codigo: 'c5',
    image: 'assets/images/hchocolate.jpg',
    producto: 'Macchiatto',
    sabores: [],
    descripcion_corta: 'Copa con varios sabores de helado',
    unidadMedida: 'unidad',
    precioVenta: 1.75
  },
  {
    codigo: 'c6',
    image: 'assets/images/hchocolate.jpg',
    producto: 'Capuchino',
    sabores: [],
    descripcion_corta: 'Vaso con un combinación de un sabor de helado con leche',
    unidadMedida: 'unidad',
    precioVenta: 1.95
  },
  {
    codigo: 'c7',
    image: 'assets/images/hchocolate.jpg',
    producto: 'Moccacino',
    sabores: [],
    descripcion_corta: 'Cono waffer con un sabor de helado',
    description_larga: 'Cono wafer con un sabor de helado a tu elección',
    unidadMedida: 'unidad',
    precioVenta: 1.95
  },
  {
    codigo: 'c8',
    image: 'assets/images/hvainilla.jpg',
    producto: 'Irlandés',
    sabores: [],
    descripcion_corta: 'Cono waffer con dos sabores de helado',
    unidadMedida: 'unidad',
    precioVenta: 2.50
  },
  {
    codigo: 'c9',
    image: 'assets/images/hchocolate.jpg',
    producto: 'Escocés',
    sabores: [],
    descripcion_corta: 'Tulipan waffer con un sabor de helado',
    unidadMedida: 'unidad',
    precioVenta: 2.50
  },
  {
    codigo: 'c10',
    image: 'assets/images/hchocolate.jpg',
    producto: 'Chocolate',
    sabores: [],
    descripcion_corta: 'Tulipan waffer con dos sabores de helado',
    unidadMedida: 'unidad',
    precioVenta: 1.75
  },
  {
    codigo: 'c11',
    image: 'assets/images/hchocolate.jpg',
    producto: 'Frappe',
    sabores: [],
    descripcion_corta: 'Copa con varios sabores de helado',
    unidadMedida: 'unidad',
    precioVenta: 1.99
  },
  {
    codigo: 'c12',
    image: 'assets/images/hchocolate.jpg',
    producto: 'Té',
    sabores: [],
    descripcion_corta: 'Vaso con un combinación de un sabor de helado con leche',
    unidadMedida: 'unidad',
    precioVenta: 1.00
  },
];
  constructor() { }

  getAllCafes() {
    return this.cafes;
  }

  getCafe(codigo: string){
    return this.cafes.find(item => codigo === item.codigo);
  }
}
