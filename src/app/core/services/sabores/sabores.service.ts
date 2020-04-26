import { Injectable } from '@angular/core';
import { Product } from '../../../product.model';

@Injectable({
  providedIn: 'root'
})
export class SaboresService {

  sabores: Product[] = [
    {
        codigo: 's1',
        image: 'assets/images/hchocolate.jpg',
        producto: 'Sabor de helado',
        sabores: ['Chocolate'],
        descripcion_corta: 'Sabor de helado sabor Chocolate',
        description_larga: 'Sabor de helado sabor chocolate suizo mejorado con cacao ecuatoriano',
        stock: 1200,
        unidadMedida: 'gramos',
        precioCompra: 15
    },
    {
      codigo: 's2',
      image: 'assets/images/hvainilla.jpg',
      producto: 'Sabor de helado',
      sabores: ['Vainilla'],
      descripcion_corta: 'Sabor de helado sabor Vainilla',
      stock: 1200,
      unidadMedida: 'gramos',
      precioCompra: 15
  },
  {
    codigo: 's3',
    image: 'assets/images/hchocolate.jpg',
    producto: 'Sabor de helado',
    sabores: ['Chicle y Sandía'],
    descripcion_corta: 'Sabor de helado sabor Chicle y Sandía',
    stock: 1200,
    unidadMedida: 'gramos',
    precioCompra: 15
  },
  {
    codigo: 's4',
    image: 'assets/images/hchocolate.jpg',
    producto: 'Sabor de helado',
    sabores: ['Rosas y Cerezas'],
    descripcion_corta: 'Sabor de helado sabor Rosas y Cerezas',
    stock: 1200,
    unidadMedida: 'gramos',
    precioCompra: 15
  },
  {
    codigo: 's5',
    image: 'assets/images/hchocolate.jpg',
    producto: 'Sabor de helado',
    sabores: ['Cafe y Almendras'],
    descripcion_corta: 'Sabor de helado sabor Cafe y Almendras',
    stock: 1200,
    unidadMedida: 'gramos',
    precioCompra: 15
  },
  {
    codigo: 's6',
    image: 'assets/images/hchocolate.jpg',
    producto: 'Sabor de helado',
    sabores: ['Coco y Coco Rallado Pasas'],
    descripcion_corta: 'Sabor de helado sabor Coco y Coco Rallado Pasas',
    stock: 1200,
    unidadMedida: 'gramos',
    precioCompra: 15
  },
  {
    codigo: 's7',
    image: 'assets/images/hchocolate.jpg',
    producto: 'Sabor de helado',
    sabores: ['Mora'],
    descripcion_corta: 'Sabor de helado sabor Mora',
    stock: 1200,
    unidadMedida: 'gramos',
    precioCompra: 15
  },
  {
    codigo: 's8',
    image: 'assets/images/hchocolate.jpg',
    producto: 'Sabor de helado',
    sabores: ['Mango'],
    descripcion_corta: 'Sabor de helado sabor Mango',
    stock: 1200,
    unidadMedida: 'gramos',
    precioCompra: 15
  },
  {
    codigo: 's9',
    image: 'assets/images/hchocolate.jpg',
    producto: 'Sabor de helado',
    sabores: ['Guanabana'],
    descripcion_corta: 'Sabor de helado sabor Guanabana',
    stock: 1200,
    unidadMedida: 'gramos',
    precioCompra: 15
  },
  {
    codigo: 's10',
    image: 'assets/images/hchocolate.jpg',
    producto: 'Sabor de helado',
    sabores: ['Maracuya'],
    descripcion_corta: 'Sabor de helado sabor Maracuya',
    stock: 1200,
    unidadMedida: 'gramos',
    precioCompra: 15
  },
  {
    codigo: 's11',
    image: 'assets/images/hchocolate.jpg',
    producto: 'Sabor de helado',
    sabores: ['Zanahoria y Naranja'],
    descripcion_corta: 'Sabor de helado sabor Zanahoria y Naranja',
    stock: 1200,
    unidadMedida: 'gramos',
    precioCompra: 15
  },
  {
    codigo: 's12',
    image: 'assets/images/hchocolate.jpg',
    producto: 'Sabor de helado',
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
