import { inject, Injectable } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  UserCredential,
  updateProfile,
} from '@angular/fire/auth';
import { Database, ref, set } from '@angular/fire/database';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth: Auth = inject(Auth);
  private db: Database = inject(Database);

  constructor() {}

  async register(
    email: string,
    password: string,
    username: string
  ): Promise<UserCredential> {
    try {
      const userCredential: UserCredential =
        await createUserWithEmailAndPassword(this.auth, email, password);

      updateProfile(userCredential.user, {
        displayName: username,
      }).then();

      await set(ref(this.db, 'users/' + userCredential.user?.uid), {
        email,
        displayName: username,
        createdAt: new Date().toISOString(),
      });

      return userCredential;
    } catch (e) {
      // console.log(e);
      throw e;
    }
  }

  async login(email: string, password: string): Promise<UserCredential> {
    try {
      const user: UserCredential = await signInWithEmailAndPassword(
        this.auth,
        email,
        password
      );

      return user;
    } catch (e) {
      // console.log(e);
      throw e;
    }
  }

  async logout(): Promise<void> {
    return await signOut(this.auth);
  }
}
