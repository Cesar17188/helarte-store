import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { auth } from 'firebase/app';
import { Observable, of } from 'rxjs';
import { switchMap, map, first } from 'rxjs/operators';
import { User } from '../../models/user';
import { RoleValidator } from '../../helpers/roleValidator';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends RoleValidator {

  public user$: Observable<User>;

  constructor(
    public afa: AngularFireAuth,
    private afs: AngularFirestore
  ) {
    super();
    this.user$ = this.afa.authState.pipe(
      switchMap((user) => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`)
          .valueChanges();
        }
        return of(null);
      })
    );
  }

  async createUser(email: string, password: string): Promise<User> {
    try {
      const { user } = await this.afa.createUserWithEmailAndPassword(
        email,
        password
      );
      this.createUserData(user);
      await this.sendVerificationEmail();
      return user;
    } catch (error) {
      console.log(error);
    }
  }


  async loginWithGoogle(): Promise<User> {
    try {
      const { user } = await this.afa.signInWithPopup(
        new auth.GoogleAuthProvider()
      );
      return user;
    } catch (error) {
      console.log(error);
    }
  }

  async registerWithGoogle(): Promise<User> {
    try {
      const { user } = await this.afa.signInWithPopup(
        new auth.GoogleAuthProvider()
      );
      this.createUserData(user);
      return user;
    } catch (error) {
      console.log(error);
    }
  }

  async registerWithFacebook(): Promise<User> {
    try {
      const { user } = await this.afa.signInWithPopup(
        new auth.FacebookAuthProvider()
      );
      this.createUserData(user);
      return user;
    } catch (error) {
      console.log(error);
    }
  }

  // loginWithFB() {
  //   const provider =  new auth.FacebookAuthProvider();
  //   return this.oAuthLogin(provider);
  // }

  async loginWithFB(): Promise<User> {
    try {
      const { user } = await this.afa.signInWithPopup(
        new auth.FacebookAuthProvider()
      );
      this.updateUserData(user);
      return user;
    } catch (error) {
      console.log(error);
    }
  }

  async resetPassword(email: string): Promise<void> {
    try {
      return this.afa.sendPasswordResetEmail(email);
    } catch (error) {
      console.log(error);
    }
  }

  async sendVerificationEmail(): Promise<void> {
    return (await this.afa.currentUser).sendEmailVerification();
  }

  async login(email: string, password: string): Promise<User> {
    // return this.afa.signInWithEmailAndPassword(email, password);
    try{
      const {user} = await this.afa.signInWithEmailAndPassword(
        email,
        password
      );
      this.updateUserData(user);
      return user;
    } catch (error) {
      console.log(error);
    }
  }

  // private oAuthLogin(provider) {
  //   return this.afa.signInWithPopup(provider)
  //   .then((credential) => {
  //     this.updateUserData(credential.user);
  //   });
  // }

  async logout(): Promise<void> {
    // return this.afa.signOut();
    try {
      await this.afa.signOut();
    } catch (error) {
      console.log(error);
    }
  }

  hasUser() {
    // tslint:disable-next-line: no-shadowed-variable
    return this.afa.authState.pipe(map( auth => auth ));
  }

  getCurrentUser() {
    return this.afa.authState.pipe(first()).toPromise();
  }

  private updateUserData(user: User) {
    const userRef: AngularFirestoreDocument<User> =
    this.afs.doc(`users/${user.uid}`);

    const data: User = {
      uid: user.uid,
      email: user.email,
      emailVerified: user.emailVerified,
      photoURL: user.photoURL,
      displayName: user.displayName,
      role: 'CLIENTE',
    };
    return userRef.set(data, {merge: true});
  }

  private createUserData(user: User) {
    console.log(user);
    const userRef = this.afs.collection('users');

    const data: User = {
      uid: user.uid,
      email: user.email,
      emailVerified: user.emailVerified,
      photoURL: user.photoURL,
      displayName: user.displayName,
      role: 'CLIENTE',
    };
    return userRef.add(data);
  }


}
