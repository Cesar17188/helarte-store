import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Product } from '../../../product.model';

@Injectable({
  providedIn: 'root'
})
export class HeladosService {

  helados: Product[] = [
    {
        codigo: 'h1',
        image: 'assets/images/hchocolate.jpg',
        producto: 'Cono simple',
        sabores: [],
        descripcion_corta: 'Cono waffer con un sabor de helado',
        descripcion_larga: 'Cono wafer con un sabor de helado a tu elección',
        unidadMedida: 'unidad',
        precioVenta: 1.30
    },
    {
      codigo: 'h2',
      image: 'assets/images/hvainilla.jpg',
      producto: 'Cono doble',
      sabores: [],
      descripcion_corta: 'Cono waffer con dos sabores de helado',
      unidadMedida: 'unidad',
      precioVenta: 2.25
  },
  {
    codigo: 'h3',
    image: 'assets/images/hchocolate.jpg',
    producto: 'Tulipan Simple',
    sabores: [],
    descripcion_corta: 'Tulipan waffer con un sabor de helado',
    unidadMedida: 'unidad',
    precioVenta: 1.50
  },
  {
    codigo: 'h4',
    image: 'assets/images/hchocolate.jpg',
    producto: 'Tulipan Doble',
    sabores: [],
    descripcion_corta: 'Tulipan waffer con dos sabores de helado',
    unidadMedida: 'unidad',
    precioVenta: 1.50
  },
  {
    codigo: 'h5',
    image: 'assets/images/hchocolate.jpg',
    producto: 'Copa',
    sabores: [],
    descripcion_corta: 'Copa con varios sabores de helado',
    unidadMedida: 'unidad',
    precioVenta: 2.95
  },
  {
    codigo: 'h6',
    image: 'assets/images/hchocolate.jpg',
    producto: 'Medio Litro',
    sabores: [],
    descripcion_corta: 'Medio litro de helado de un sabor',
    unidadMedida: 'unidad',
    precioVenta: 2.50
  },
  {
    codigo: 'h7',
    image: 'assets/images/hchocolate.jpg',
    producto: 'Litro',
    sabores: [],
    descripcion_corta: 'Litro de helado de un sabor',
    unidadMedida: 'unidad',
    precioVenta: 2.50
  },
];

  idHelado = 'R4ryZffiU9qGbN9I4kip';

  constructor(
    private firestore: AngularFirestore,
  ) { }

  public createProducto(data: Product) {
    return this.firestore.collection('Productos').add(data);
  }


  public getProducto(documentId: string) {
    return this.firestore.collection('Productos').doc(this.idHelado).collection('Helados').doc(documentId).snapshotChanges();
  }


  public getHelados() {
    return this.firestore.collection('Productos').doc(this.idHelado)
    .collection('Helados', ref => ref.orderBy('codigo', 'asc')).snapshotChanges();
  }


  public updateProducto(documentId: string, partialData: Partial<Product>){
    return this.firestore.collection('Helados').doc(documentId).set(partialData);
  }


  public deleteProduct(documentId: string) {
    this.firestore.collection('Helados').doc(documentId).delete().then( () => {
      console.log('Producto Eliminado exitosamente!');
    }).catch((error) => {
      console.error('Error al eliminar el producto: ', error);
    });
  }


  getAllIceCream() {
    return this.helados;
  }

  getIceCream(codigo: string){
    return this.helados.find(item => codigo === item.codigo);
  }
}
