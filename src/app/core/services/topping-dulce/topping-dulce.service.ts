
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from '@core/models/product.model';
import { TOPPING } from '@core/models/topping.model';
@Injectable({
  providedIn: 'root'
})
export class ToppingDulceService {

  idToppingD = 'mBqoPHPZmvt0Nqq7iGSX';
  docRef = this.firestore.collection<TOPPING>('inventario').doc(this.idToppingD);

  toppingD: Product [];

  constructor(
    private firestore: AngularFirestore,
  ) { }

  public createToppingD(data: TOPPING) {
    return this.docRef.collection('toppings_dulce').add(data);
  }


  public getToppingD(codigo: string) {
    return this.docRef.collection('toppings_dulce', ref => ref.
       where('codigo', '==', codigo)).snapshotChanges();
  }

  public getAllToppingD() {
    return this.docRef.collection('toppings_dulce', ref => ref.
            orderBy('codigo', 'asc')).snapshotChanges();
  }

  public updateToppingD(documentId: string, partialData: Partial<TOPPING>){
    this.docRef.collection('toppings_dulce').doc(documentId).
    update(partialData);
  }


  public deleteToppingD(documentId: string) {
    this.docRef.collection('toppings_dulce').doc(documentId).delete();
  }
}
