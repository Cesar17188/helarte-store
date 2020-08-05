import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afa: AngularFireAuth
  ) { }

  createUser(email: string, password: string) {
    return this.afa.createUserWithEmailAndPassword(email, password);
  }



 async loginWithGoogle() {
  const res = await this.afa.signInWithPopup ( new auth.GoogleAuthProvider());
  const user = res.user;
  console.log(user);
  return user;
  }

  loginWithFB() {
    const res = this.afa.signInWithPopup (new auth.FacebookAuthProvider());
    return res;
  }

  login(email: string, password: string) {
    return this.afa.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.afa.signOut();
  }

  hasUser() {
    return this.afa.authState;
  }
}
