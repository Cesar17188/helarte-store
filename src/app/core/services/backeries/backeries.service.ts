import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from 'src/app/core/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class BackeriesService {

  idCrepe = 'VeHLjG6fV98aK5QjBIGg';

  constructor(
    private firestore: AngularFirestore,
  ) { }

  public createBackerie(data: Product) {
    return this.firestore.collection<Product>('Productos').doc(this.idCrepe)
    .collection('crepes').add(data);
  }


  public getBackerie(codigo: string) {
    return this.firestore.collection('Productos').doc(this.idCrepe)
    .collection('crepes', ref => ref.where('codigo', '==', codigo)).snapshotChanges();
  }

  public getAllBackeries() {
    return this.firestore.collection('Productos').doc(this.idCrepe)
    .collection('crepes', ref => ref.orderBy('codigo', 'asc')).snapshotChanges();
    // return this.firestore.collection(`Productos/{crepes}`,
    // ref => ref.orderBy('codigo', 'asc')).snapshotChanges();
  }

  public updateBackerie(documentId: string, partialData: Partial<Product>){
    this.firestore.collection('Productos').doc(this.idCrepe)
    .collection('crepes').doc(documentId).update(partialData);
  }


  public deleteBackerie(documentId: string) {
    this.firestore.collection('Productos').doc(this.idCrepe)
    .collection('crepes').doc(documentId).delete();
  }

}
