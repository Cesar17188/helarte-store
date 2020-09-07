import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from '../../models/user';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  // public getUser(documentId: string) {
  //   return this.firestore.collection('users').doc(documentId).snapshotChanges();
  // }

  public getUser(email: string) {
    return this.firestore.collection('users', ref => ref.where('email', '==', email)).snapshotChanges();
  }

  public getUsers() {
    return this.firestore.collection('users').snapshotChanges();
  }
}
