import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from 'src/app/core/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CafesService {
  idCafe = 'fI3wqufs38vXboW3728a';

  constructor(
    private firestore: AngularFirestore,
  ) { }

  public createCafe(data: Product) {
    return this.firestore.collection<Product>('Productos').doc(this.idCafe)
    .collection('cafes').add(data);
  }


  public getCafe(codigo: string) {
    return this.firestore.collection('Productos').doc(this.idCafe)
    .collection('cafes', ref => ref.where('codigo', '==', codigo)).snapshotChanges();
  }

  public getAllCafes() {
    return this.firestore.collection('Productos').doc(this.idCafe)
    .collection('cafes', ref => ref.orderBy('codigo', 'asc')).snapshotChanges();
    // return this.firestore.collection(`Productos/{cafes}`,
    // ref => ref.orderBy('codigo', 'asc')).snapshotChanges();
  }

  public updateCafe(documentId: string, partialData: Partial<Product>){
    this.firestore.collection('Productos').doc(this.idCafe)
    .collection('cafes').doc(documentId).update(partialData);
  }


  public deleteCafe(documentId: string) {
    this.firestore.collection('Productos').doc(this.idCafe)
    .collection('cafes').doc(documentId).delete();
  }
}
