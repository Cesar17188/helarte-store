import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from 'src/app/core/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CafesService {
  idCafe = 'fI3wqufs38vXboW3728a';
  docRef = this.firestore.collection<Product>('Productos').doc(this.idCafe);

  constructor(
    private firestore: AngularFirestore,
  ) { }

  public createCafe(data: Product) {
    return this.docRef.collection('cafes').add(data);
  }


  public getCafe(codigo: string) {
    return this.docRef.collection('cafes', ref => ref.
     where('codigo', '==', codigo)).snapshotChanges();
  }

  public getAllCafes() {
    return this.docRef.collection('cafes', ref => ref.
          orderBy('codigo', 'asc')).snapshotChanges();
  }

  public updateCafe(documentId: string, partialData: Partial<Product>){
    this.docRef.collection('cafes').doc(documentId).
                                update(partialData);
  }

  public deleteCafe(documentId: string) {
    this.docRef.collection('cafes').doc(documentId).delete();
  }
}
