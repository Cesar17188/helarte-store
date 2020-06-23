import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Product } from '../../../product.model';

@Injectable({
  providedIn: 'root'
})
export class HeladosService {

  idHelado = 'R4ryZffiU9qGbN9I4kip';

  constructor(
    private firestore: AngularFirestore,
  ) { }

  public createProducto(data: Product) {
    return this.firestore.collection<Product>('Productos').add(data);
  }


  public getHelado(codigo: string) {
    return this.firestore.collection('Productos').doc(this.idHelado)
    .collection('Helados', ref => ref.where('codigo', '==', codigo)).snapshotChanges();
  }

  public getHelados() {
    return this.firestore.collection('Productos').doc(this.idHelado)
    .collection('Helados', ref => ref.orderBy('codigo', 'asc')).snapshotChanges();
  }

  public updateProducto(documentId: string, partialData: Partial<Product>){
    return this.firestore.collection<Product>('Helados').doc(documentId).set(partialData);
  }


  public deleteProduct(documentId: string) {
    this.firestore.collection<Product>('Helados').doc(documentId).delete().then( () => {
      console.log('Producto Eliminado exitosamente!');
    }).catch((error) => {
      console.error('Error al eliminar el producto: ', error);
    });
  }

}
