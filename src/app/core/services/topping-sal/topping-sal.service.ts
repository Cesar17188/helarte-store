import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from 'src/app/core/models/product.model';
import { TOPPING } from '@core/models/topping.model';

@Injectable({
  providedIn: 'root'
})
export class ToppingSalService {

  idToppingS = 'BIkPjYsToPu5ZDaX4qVu';
  docRef = this.firestore.collection<TOPPING>('inventario').doc(this.idToppingS);

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

}
