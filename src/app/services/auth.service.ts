import { Injectable } from '@angular/core';

// Auth
import { AngularFireAuth} from '@angular/fire/auth';
import {auth} from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth) {
  }


  getLoginUser(){
    return this.afAuth.authState;
  }

  async logout(){
    await this.afAuth.signOut();
  }

  async googleLogin() {
    console.log('Intento login con Google');
    await this.afAuth.signInWithPopup(
      new auth.GoogleAuthProvider()
    );
  }


}
