import { inject, Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  User,
} from '@angular/fire/auth';
import { Database, ref, set } from '@angular/fire/database';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  private auth: Auth = inject(Auth);
  private db: Database = inject(Database);

  async createUser(
    email: string,
    password: string,
    displayName: string
  ): Promise<User> {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );

      console.log(userCredential.user);
      // await userCredential.user?.updateProfile({
      //   displayName,
      // });

      // await set(ref(this.db, 'users/' + userCredential.user?.uid), {
      //   email,
      //   displayName,
      //   createdAt: new Date().toISOString(),
      // });
      return userCredential.user;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async login(email: string, password: string): Promise<User> {
    try {
      const userCredential = await signInWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      return userCredential.user;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  getCurrentUser() {
    return this.auth.currentUser;
  }

  async logout(): Promise<void> {
    await signOut(this.auth);
  }
}
