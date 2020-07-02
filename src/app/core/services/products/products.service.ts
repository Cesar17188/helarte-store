import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Product } from '../../../models/product.model';


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


    public updateProducto(documentId: string, partialData: Partial<Product>){
      return this.firestore.collection('Productos').doc(documentId).set(partialData);
    }


    public deleteProduct(documentId: string) {
      this.firestore.collection('Productos').doc(documentId).delete().then( () => {
        console.log('Producto Eliminado exitosamente!');
      }).catch((error) => {
        console.error('Error al eliminar el producto: ', error);
      });
    }
}
