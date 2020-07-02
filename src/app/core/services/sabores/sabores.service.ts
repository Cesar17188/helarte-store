import { Injectable } from '@angular/core';
import { Product } from '../../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class SaboresService {

  sabores: Product[] = [
    {
        codigo: 's1',
        image: 'assets/images/hchocolate.jpg',
        producto: 'Chocolate',
        sabores: ['Chocolate'],
        descripcion_corta: 'Sabor de helado sabor Chocolate',
        descripcion_larga: 'Sabor de helado sabor chocolate suizo mejorado con cacao ecuatoriano',
        stock: 1200,
        unidadMedida: 'gramos',
        precioCompra: 15
    },
    {
      codigo: 's2',
      image: 'assets/images/hvainilla.jpg',
      producto: 'Vainilla',
      sabores: ['Vainilla'],
      descripcion_corta: 'Sabor de helado sabor Vainilla',
      stock: 1200,
      unidadMedida: 'gramos',
      precioCompra: 15
  },
  {
    codigo: 's3',
    image: 'assets/images/hchocolate.jpg',
    producto: 'Chicle y Sandía',
    sabores: ['Chicle y Sandía'],
    descripcion_corta: 'Sabor de helado sabor Chicle y Sandía',
    stock: 1200,
    unidadMedida: 'gramos',
    precioCompra: 15
  },
  {
    codigo: 's4',
    image: 'assets/images/hchocolate.jpg',
    producto: 'Rosas y Cerezas',
    sabores: ['Rosas y Cerezas'],
    descripcion_corta: 'Sabor de helado sabor Rosas y Cerezas',
    stock: 1200,
    unidadMedida: 'gramos',
    precioCompra: 15
  },
  {
    codigo: 's5',
    image: 'assets/images/hchocolate.jpg',
    producto: 'Cafe y Almendras',
    sabores: ['Cafe y Almendras'],
    descripcion_corta: 'Sabor de helado sabor Cafe y Almendras',
    stock: 1200,
    unidadMedida: 'gramos',
    precioCompra: 15
  },
  {
    codigo: 's6',
    image: 'assets/images/hchocolate.jpg',
    producto: 'Coco y Coco Rallado Pasas',
    sabores: ['Coco y Coco Rallado Pasas'],
    descripcion_corta: 'Sabor de helado sabor Coco y Coco Rallado Pasas',
    stock: 1200,
    unidadMedida: 'gramos',
    precioCompra: 15
  },
  {
    codigo: 's7',
    image: 'assets/images/hchocolate.jpg',
    producto: 'Mora',
    sabores: ['Mora'],
    descripcion_corta: 'Sabor de helado sabor Mora',
    stock: 1200,
    unidadMedida: 'gramos',
    precioCompra: 15
  },
  {
    codigo: 's8',
    image: 'assets/images/hchocolate.jpg',
    producto: 'Mango',
    sabores: ['Mango'],
    descripcion_corta: 'Sabor de helado sabor Mango',
    stock: 1200,
    unidadMedida: 'gramos',
    precioCompra: 15
  },
  {
    codigo: 's9',
    image: 'assets/images/hchocolate.jpg',
    producto: 'Guanabana',
    sabores: ['Guanabana'],
    descripcion_corta: 'Sabor de helado sabor Guanabana',
    stock: 1200,
    unidadMedida: 'gramos',
    precioCompra: 15
  },
  {
    codigo: 's10',
    image: 'assets/images/hchocolate.jpg',
    producto: 'Maracuya',
    sabores: ['Maracuya'],
    descripcion_corta: 'Sabor de helado sabor Maracuya',
    stock: 1200,
    unidadMedida: 'gramos',
    precioCompra: 15
  },
  {
    codigo: 's11',
    image: 'assets/images/hchocolate.jpg',
    producto: 'Zanahoria y Naranja',
    sabores: ['Zanahoria y Naranja'],
    descripcion_corta: 'Sabor de helado sabor Zanahoria y Naranja',
    stock: 1200,
    unidadMedida: 'gramos',
    precioCompra: 15
  },
  {
    codigo: 's12',
    image: 'assets/images/hchocolate.jpg',
    producto: 'Limón y Hierva Buena',
    sabores: ['Limón y Hierva Buena'],
    descripcion_corta: 'Sabor de helado sabor Limón y Hierva Buena',
    stock: 1200,
    unidadMedida: 'gramos',
    precioCompra: 15
  },
];

  constructor() { }

  getAllFlavor() {
    return this.sabores;
  }

  getFlavor(codigo: string){
    return this.sabores.find(item => codigo === item.codigo);
  }
}