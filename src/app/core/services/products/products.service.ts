import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Product } from '../../../product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private firestore: AngularFirestore
  ) { }
    public createProducto(data: Product) {
      return this.firestore.collection('Productos').add(data);
    }
    public getProducto(documentId: string) {
      return this.firestore.collection('Productos').doc(documentId).snapshotChanges();
    }
    public getProductos() {
      return this.firestore.collection('Productos', ref => ref.orderBy('codigo', 'asc')).snapshotChanges();
    }
    public updateProducto(documentId: string, data: any){
      return this.firestore.collection('Productos').doc(documentId).set(data);
    }
}
