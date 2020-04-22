import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-iceproducts',
  templateUrl: './iceproducts.component.html',
  styleUrls: ['./iceproducts.component.css']
})
export class IceproductsComponent implements OnInit {

  helados: Product[] = [
    {
      codigo: '1',
      image: 'assets/images/hchocolate.jpg',
      producto: 'Helado',
      sabores: ['Chocolate'],
      descripcion_corta: 'Helado sabor Chocolate',
      description_larga: 'Helado sabor chocolate suizo mejorado con cacao ecuatoriano',
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
  image: 'assets/images/hchocolate.jpg',
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
];
  constructor() { }

  ngOnInit(): void {
  }

  clickProduct(codigo: string) {
    console.log('producto');
    console.log(codigo);
  }

}
