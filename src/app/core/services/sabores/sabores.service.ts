import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { SABOR } from 'src/app/core/models/sabor.model';

@Injectable({
  providedIn: 'root'
})
export class SaboresService {

  idSabor = 'CT3Hcr6PH5VKHG024OW4';
  docRef = this.firestore.collection<SABOR>('inventario').doc(this.idSabor);


//   sabores: SABOR[] = [
//     {
//         codigo: 's1',
//         image: 'assets/images/hchocolate.jpg',
//         producto: 'Chocolate',
//         descripcion_corta: 'Sabor de helado sabor Chocolate',
//         descripcion_larga: 'Sabor de helado sabor chocolate suizo mejorado con cacao ecuatoriano',
//         stock: 1200,
//         unidadMedida: 'gramos',
//         precioCompra: 15
//     },
//     {
//       codigo: 's2',
//       image: 'assets/images/hvainilla.jpg',
//       producto: 'Vainilla',
//       descripcion_corta: 'Sabor de helado sabor Vainilla',
//       stock: 1200,
//       unidadMedida: 'gramos',
//       precioCompra: 15
//   },
//   {
//     codigo: 's3',
//     image: 'assets/images/hchocolate.jpg',
//     producto: 'Chicle y Sandía',
//     descripcion_corta: 'Sabor de helado sabor Chicle y Sandía',
//     stock: 1200,
//     unidadMedida: 'gramos',
//     precioCompra: 15
//   },
//   {
//     codigo: 's4',
//     image: 'assets/images/hchocolate.jpg',
//     producto: 'Rosas y Cerezas',
//     descripcion_corta: 'Sabor de helado sabor Rosas y Cerezas',
//     stock: 1200,
//     unidadMedida: 'gramos',
//     precioCompra: 15
//   },
//   {
//     codigo: 's5',
//     image: 'assets/images/hchocolate.jpg',
//     producto: 'Cafe y Almendras',
//     descripcion_corta: 'Sabor de helado sabor Cafe y Almendras',
//     stock: 1200,
//     unidadMedida: 'gramos',
//     precioCompra: 15
//   },
//   {
//     codigo: 's6',
//     image: 'assets/images/hchocolate.jpg',
//     producto: 'Coco y Coco Rallado Pasas',
//     descripcion_corta: 'Sabor de helado sabor Coco y Coco Rallado Pasas',
//     stock: 1200,
//     unidadMedida: 'gramos',
//     precioCompra: 15
//   },
//   {
//     codigo: 's7',
//     image: 'assets/images/hchocolate.jpg',
//     producto: 'Mora',
//     descripcion_corta: 'Sabor de helado sabor Mora',
//     stock: 1200,
//     unidadMedida: 'gramos',
//     precioCompra: 15
//   },
//   {
//     codigo: 's8',
//     image: 'assets/images/hchocolate.jpg',
//     producto: 'Mango',
//     descripcion_corta: 'Sabor de helado sabor Mango',
//     stock: 1200,
//     unidadMedida: 'gramos',
//     precioCompra: 15
//   },
//   {
//     codigo: 's9',
//     image: 'assets/images/hchocolate.jpg',
//     producto: 'Guanabana',
//     descripcion_corta: 'Sabor de helado sabor Guanabana',
//     stock: 1200,
//     unidadMedida: 'gramos',
//     precioCompra: 15
//   },
//   {
//     codigo: 's10',
//     image: 'assets/images/hchocolate.jpg',
//     producto: 'Maracuya',
//     descripcion_corta: 'Sabor de helado sabor Maracuya',
//     stock: 1200,
//     unidadMedida: 'gramos',
//     precioCompra: 15
//   },
//   {
//     codigo: 's11',
//     image: 'assets/images/hchocolate.jpg',
//     producto: 'Zanahoria y Naranja',
//     descripcion_corta: 'Sabor de helado sabor Zanahoria y Naranja',
//     stock: 1200,
//     unidadMedida: 'gramos',
//     precioCompra: 15
//   },
//   {
//     codigo: 's12',
//     image: 'assets/images/hchocolate.jpg',
//     producto: 'Limón y Hierva Buena',
//     descripcion_corta: 'Sabor de helado sabor Limón y Hierva Buena',
//     stock: 1200,
//     unidadMedida: 'gramos',
//     precioCompra: 15
//   },
// ];

  constructor(
    private firestore: AngularFirestore,
  ) { }

  public createSabor(data: SABOR) {
    return this.docRef.collection('sabores').add(data);
  }


  public getSabor(codigo: string) {
    return this.docRef.collection('sabores', ref => ref.
       where('codigo', '==', codigo)).snapshotChanges();
  }

  public getAllSabores() {
    return this.docRef.collection('sabores', ref => ref.
            orderBy('codigo', 'asc')).snapshotChanges();
  }

  public updateSabor(documentId: string, partialData: Partial<SABOR>){
    this.docRef.collection('sabores').doc(documentId).
    update(partialData);
  }


  public deleteSabor(documentId: string) {
    this.docRef.collection('sabores').doc(documentId).delete();
  }

  // getAllFlavor() {
  //   return this.sabores;
  // }

  // getFlavor(codigo: string){
  //   return this.sabores.find(item => codigo === item.codigo);
  // }
}
