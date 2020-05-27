import { Injectable } from '@angular/core';
import { Product } from '../../../product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Product[] = [
    {
        codigo: 'p1',
        image: 'assets/images/hchocolate.jpg',
        producto: 'helados',
        descripcion_corta: 'Helados de casa',
        description_larga: 'Deliciosos helados preparados con sabores naturales'
    },
    {
      codigo: 'p2',
      image: 'assets/images/crepes.jpg',
      producto: 'crepes',
      descripcion_corta: 'Exquisitos crepes',
      description_larga: 'Exóticos crepes con sabores de dulce y sal para experimentar y disfrutar'
    },
    {
      codigo: 'p3',
      image: 'assets/images/cafe.jpg',
      producto: 'shakes',
      descripcion_corta: 'Deliciosos batidos',
      description_larga: 'Batidos de leche y fruta '
  },
    {
      codigo: 'p4',
      image: 'assets/images/cafe.jpg',
      producto: 'cafes',
      descripcion_corta: 'Cafes para suavizar tu día',
      description_larga: 'Relajantes cafes preparados con grano ecuatoriano molido'
  },
  {
    codigo: 'p5',
    image: 'assets/images/snacks.jpg',
    producto: 'snacks',
    descripcion_corta: 'Snacks para acompañar en el camino',
    description_larga: 'Bocaditos para llevar en el camino y disfrutar donde quieras'
  },
  {
    codigo: 'p6',
    image: 'assets/images/snacks.jpg',
    producto: 'bebidas',
    descripcion_corta: 'Bebidas individuales',
    description_larga: 'Variadas bebidas entre gaseosas, aguas'
  },
];
  constructor() { }

  getAllProducts() {
    return this.products;
  }

  getProduct(codigo: string){
    return this.products.find(item => codigo === item.codigo);
  }
}
