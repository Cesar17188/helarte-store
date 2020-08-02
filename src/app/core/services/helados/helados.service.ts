import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { HELADO } from 'src/app/core/models/helado.model';

@Injectable({
  providedIn: 'root'
})
export class HeladosService {

  idHelado = 'R4ryZffiU9qGbN9I4kip';

  constructor(
    private firestore: AngularFirestore,
  ) { }

  public createHelado(data: HELADO) {
    return this.firestore.collection<HELADO>('Productos').doc(this.idHelado)
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

  public updateHelado(documentId: string, partialData: Partial<HELADO>){
    this.firestore.collection('Productos').doc(this.idHelado)
    .collection('Helados').doc(documentId).update(partialData);
  }


  public deleteHelado(documentId: string) {
    this.firestore.collection('Productos').doc(this.idHelado)
    .collection('Helados').doc(documentId).delete();
  }

}
