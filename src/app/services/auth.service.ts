import { inject, Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  User,
  onAuthStateChanged,
} from '@angular/fire/auth';
import { Database, ref, set } from '@angular/fire/database';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth: Auth = inject(Auth);
  private db: Database = inject(Database);
  public user: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(
    null
  );

  constructor() {
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        this.user.next(user);
      } else {
        this.user.next(null);
      }
    });
  }

  async createUser(email: string, password: string): Promise<User> {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );

      await set(ref(this.db, 'users/' + userCredential.user?.uid), {
        email,
        createdAt: new Date().toISOString(),
      });

      this.user.next(userCredential.user);

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

      this.user.next(userCredential.user);

      return userCredential.user;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  isUserLoggedIn(): boolean {
    return this.user.getValue() !== null;
  }

  async logout(): Promise<void> {
    await signOut(this.auth);
    this.user.next(null);
  }
}
