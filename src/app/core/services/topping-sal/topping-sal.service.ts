import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from 'src/app/core/models/product.model';
import { TOPPING } from '../../models/topping.model';

@Injectable({
  providedIn: 'root'
})
export class ToppingSalService {

  idToppingS = 'BIkPjYsToPu5ZDaX4qVu';
  docRef = this.firestore.collection<TOPPING>('inventario').doc(this.idToppingS);

  // toppingS: Product [] = [
  //   {
  //       codigo: 'ts1',
  //       image: 'assets/images/hchocolate.jpg',
  //       producto: 'Queso',
  //       descripcion_corta: 'Complemento de queso',
  //       descripcion_larga: 'Complementa tu elección con el sabor de queso',
  //       stock: 100,
  //       unidadMedida: 'gramos',
  //       precioCompra: 15
  //   },
  //   {
  //     codigo: 'ts2',
  //     image: 'assets/images/hchocolate.jpg',
  //     producto: 'Salami',
  //     descripcion_corta: 'Complemento de salami',
  //     descripcion_larga: 'Complementa tu elección con el sabor de salami',
  //     stock: 100,
  //     unidadMedida: 'unidad',
  //     precioCompra: 15
  //   },
  //   {
  //     codigo: 'ts3',
  //     image: 'assets/images/hchocolate.jpg',
  //     producto: 'Pollo',
  //     descripcion_corta: 'Complemento de pollo',
  //     descripcion_larga: 'Complementa tu elección con el sabor de pollo',
  //     stock: 100,
  //     unidadMedida: 'unidad',
  //     precioCompra: 15
  //   },
  //   {
  //     codigo: 'ts4',
  //     image: 'assets/images/hchocolate.jpg',
  //     producto: 'Jamón',
  //     descripcion_corta: 'Complemento de jamón',
  //     descripcion_larga: 'Complementa tu elección con el sabor del jamón',
  //     stock: 100,
  //     unidadMedida: 'unidad',
  //     precioCompra: 15
  //   },
  // ];
  constructor(
    private firestore: AngularFirestore,
  ) { }

  public createToppingS(data: TOPPING) {
    return this.docRef.collection('toppings_sal').add(data);
  }


  public getToppingS(codigo: string) {
    return this.docRef.collection('toppings_sal', ref => ref.
       where('codigo', '==', codigo)).snapshotChanges();
  }

  public getAllToppingsS() {
    return this.docRef.collection('toppings_sal', ref => ref.
            orderBy('codigo', 'asc')).snapshotChanges();
  }

  public updateToppingS(documentId: string, partialData: Partial<TOPPING>){
    this.docRef.collection('toppings_sal').doc(documentId).
    update(partialData);
  }


  public deleteToppingS(documentId: string) {
    this.docRef.collection('toppings_sal').doc(documentId).delete();
  }

  // getAllToppingsS() {
  //   return this.toppingS;
  // }

  // getToppingS(codigo: string) {
  //   return this.toppingS.find(item => codigo === item.codigo);
  // }
}
