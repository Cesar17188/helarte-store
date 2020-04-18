import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'helarte-store';

  products: Product[] = [
      {
          codigo: '1',
          image: 'assets/images/hchocolate.jpg',
          producto: 'Helado',
          sabores: ['Chocolate'],
          descripcion_corta: 'Helado sabor Chocolate',
          stock: 1200,
          unidadMedida: 'gramos',
          precioCompra: 15
      },
      {
        codigo: '2',
        image: 'assets/images/hvainilla.jpg',
        producto: 'Helado',
        sabores: ['Vainilla'],
        descripcion_corta: 'Helado sabor Vainilla',
        stock: 1200,
        unidadMedida: 'gramos',
        precioCompra: 15
    },
    {
      codigo: '3',
      image: 'assets/images/hchicleysandia.jpg',
      producto: 'Helado',
      sabores: ['Chicle y Sandía'],
      descripcion_corta: 'Helado sabor Chicle y Sandía',
      stock: 1200,
      unidadMedida: 'gramos',
      precioCompra: 15
    },
    {
      codigo: '4',
      image: 'assets/images/hchocolate.jpg',
      producto: 'Helado',
      sabores: ['Rosas y Cerezas'],
      descripcion_corta: 'Helado sabor Rosas y Cerezas',
      stock: 1200,
      unidadMedida: 'gramos',
      precioCompra: 15
    },
    {
      codigo: '5',
      image: 'assets/images/hchocolate.jpg',
      producto: 'Helado',
      sabores: ['Cafe y Almendras'],
      descripcion_corta: 'Helado sabor Cafe y Almendras',
      stock: 1200,
      unidadMedida: 'gramos',
      precioCompra: 15
    },
    {
      codigo: '6',
      image: 'assets/images/hchocolate.jpg',
      producto: 'Helado',
      sabores: ['Coco y Coco Rallado Pasas'],
      descripcion_corta: 'Helado sabor Coco y Coco Rallado Pasas',
      stock: 1200,
      unidadMedida: 'gramos',
      precioCompra: 15
    },
    {
      codigo: '7',
      image: 'assets/images/hchocolate.jpg',
      producto: 'Helado',
      sabores: ['Mora'],
      descripcion_corta: 'Helado sabor Mora',
      stock: 1200,
      unidadMedida: 'gramos',
      precioCompra: 15
    },
    {
      codigo: '8',
      image: 'assets/images/hchocolate.jpg',
      producto: 'Helado',
      sabores: ['Mango'],
      descripcion_corta: 'Helado sabor Mango',
      stock: 1200,
      unidadMedida: 'gramos',
      precioCompra: 15
    },
    {
      codigo: '9',
      image: 'assets/images/hchocolate.jpg',
      producto: 'Helado',
      sabores: ['Guanabana'],
      descripcion_corta: 'Helado sabor Guanabana',
      stock: 1200,
      unidadMedida: 'gramos',
      precioCompra: 15
    },
    {
      codigo: '10',
      image: 'assets/images/hchocolate.jpg',
      producto: 'Helado',
      sabores: ['Maracuya'],
      descripcion_corta: 'Helado sabor Maracuya',
      stock: 1200,
      unidadMedida: 'gramos',
      precioCompra: 15
    },
    {
      codigo: '11',
      image: 'assets/images/hchocolate.jpg',
      producto: 'Helado',
      sabores: ['Zanahoria y Naranja'],
      descripcion_corta: 'Helado sabor Zanahoria y Naranja',
      stock: 1200,
      unidadMedida: 'gramos',
      precioCompra: 15
    },
    {
      codigo: '12',
      image: 'assets/images/hchocolate.jpg',
      producto: 'Helado',
      sabores: ['Limón y Hierva Buena'],
      descripcion_corta: 'Helado sabor Limón y Hierva Buena',
      stock: 1200,
      unidadMedida: 'gramos',
      precioCompra: 15
    },
  ];

  clickProduct(codigo: string) {
    console.log('producto');
    console.log(codigo);
  }

}
