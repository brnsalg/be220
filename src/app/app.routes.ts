import { Routes } from '@angular/router';
import {
  redirectUnauthorizedTo,
  redirectLoggedInTo,
  canActivate,
} from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['home']);

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.page').then((m) => m.HomePage),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'auth',
    loadComponent: () =>
      import('./pages/auth/auth.page').then((m) => m.AuthPage),
    ...canActivate(redirectLoggedInToHome),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./pages/register/register.page').then((m) => m.RegisterPage),
    ...canActivate(redirectLoggedInToHome),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/not-found/not-found.page').then((m) => m.NotFoundPage),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
