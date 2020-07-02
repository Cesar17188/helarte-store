import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Product } from '../../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class HeladosService {

  idHelado = 'R4ryZffiU9qGbN9I4kip';

  constructor(
    private firestore: AngularFirestore,
  ) { }

  public createHelado(data: Product) {
    return this.firestore.collection<Product>('Productos').doc(this.idHelado)
    .collection('Helados').add(data);
  }


  public getHelado(codigo: string) {
    return this.firestore.collection('Productos').doc(this.idHelado)
    .collection('Helados', ref => ref.where('codigo', '==', codigo)).snapshotChanges();
  }

  public getHelados() {
    return this.firestore.collection('Productos').doc(this.idHelado)
    .collection('Helados', ref => ref.orderBy('codigo', 'asc')).snapshotChanges();
  }

  public updateHelado(documentId: string, partialData: Partial<Product>){
    this.firestore.collection('Productos').doc(this.idHelado)
    .collection('Helados').doc(documentId).update(partialData);
  }


  public deleteHelado(documentId: string) {
    this.firestore.collection('Productos').doc(this.idHelado)
    .collection('Helados').doc(documentId).delete();
  }

}
