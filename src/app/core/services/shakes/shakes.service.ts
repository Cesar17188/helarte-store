import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ShakesService {
  idShake = 'nw8lXO7GyQP9mujejwwN';
  docRef = this.firestore.collection<Product>('Productos').doc(this.idShake);
  constructor(
    private firestore: AngularFirestore,
  ) { }

  public createShake(data: Product) {
    return this.docRef.collection('shakes').add(data);
  }


  public getShake(codigo: string) {
    return this.docRef.collection('shakes', ref => ref.
      where('codigo', '==', codigo)).snapshotChanges();
  }

  public getAllShakes() {
    return this.docRef.collection('shakes', ref => ref.
           orderBy('codigo', 'asc')).snapshotChanges();
  }

  public updateShake(documentId: string, partialData: Partial<Product>){
    this.docRef.collection('shakes').doc(documentId).
                                 update(partialData);
  }


  public deleteShake(documentId: string) {
    this.docRef.collection('shakes').doc(documentId).delete();
  }

}
