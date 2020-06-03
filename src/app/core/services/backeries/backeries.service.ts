import { Injectable } from '@angular/core';
import { Product } from '../../../product.model';

@Injectable({
  providedIn: 'root'
})
export class BackeriesService {
  backeries: Product[] = [
    {
        codigo: 'cp1',
        image: 'assets/images/hchocolate.jpg',
        producto: 'Crepe de dulce',
        sabores: [],
        descripcion_corta: 'Crepe de dulce con topping de dulce',
        description_larga: 'Crepe de dulce con un topping de dulce a tu elección',
        unidadMedida: 'unidad',
        precioVenta: 2.95
    },
    {
      codigo: 'cp2',
      image: 'assets/images/hvainilla.jpg',
      producto: 'Crepe de sal',
      sabores: [],
      descripcion_corta: 'Crepe de sal con topping de sal',
      description_larga: 'Crepe de sal con un topping de sal a tu elección',
      unidadMedida: 'unidad',
      precioVenta: 3.25
  },
];
  constructor() { }

  getAllBackeries() {
    return this.backeries;
  }

  getBackerie(codigo: string){
    return this.backeries.find(item => codigo === item.codigo);
  }
}
