import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from 'src/app/core/models/product.model';
import { SYRUP } from '@core/models/syrup.model';

@Injectable({
  providedIn: 'root'
})
export class SalsasService {

  idSalsa = 'j6siqvLUplaRZKQb3zuG';
  idCrema = 'hJkD0KrAf98OsrquNHhM';
  docRef = this.firestore.collection<SYRUP>('inventario').doc(this.idSalsa);
  cremRef = this.firestore.collection<SYRUP>('inventario');

  constructor(
    private firestore: AngularFirestore,
  ) { }

  public createSyrup(data: SYRUP) {
    return this.docRef.collection('syrups').add(data);
  }


  public getSyrup(codigo: string) {
    return this.docRef.collection('syrups', ref => ref.
       where('codigo', '==', codigo)).snapshotChanges();
  }

  public getAllSyrups() {
    return this.docRef.collection('syrups', ref => ref.
            orderBy('codigo', 'asc')).snapshotChanges();
  }

  public updateSyrup(documentId: string, partialData: Partial<SYRUP>){
    this.docRef.collection('syrups').doc(documentId).
    update(partialData);
  }


  public deleteSyrup(documentId: string) {
    this.docRef.collection('syrups').doc(documentId).delete();
  }

 public getCrema() {
   return this.firestore.collection<SYRUP>('inventario',
   ref => ref.where('codigo', '==', 'crem0001')).snapshotChanges();
 }

}
