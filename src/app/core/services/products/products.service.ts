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
    },
    {
      codigo: 'p2',
      image: 'assets/images/hvainilla.jpg',
      producto: 'cafes',
      descripcion_corta: 'Cafes para suavizar tu día',
  },
  {
    codigo: 'p3',
    image: 'assets/images/hchocolate.jpg',
    producto: 'crepes',
    descripcion_corta: 'Exquisitos bocadillos y postres',
  },
  {
    codigo: 'p4',
    image: 'assets/images/hchocolate.jpg',
    producto: 'snacks',
    descripcion_corta: 'Snacks para acompañar en el camino',
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
