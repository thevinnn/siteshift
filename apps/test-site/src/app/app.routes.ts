import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Hearth & Crumb | Fresh bread daily',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'menu',
    title: 'Menu | Hearth & Crumb',
    loadComponent: () => import('./pages/menu/menu').then((m) => m.Menu),
  },
  {
    path: 'contact',
    title: 'Contact | Hearth & Crumb',
    loadComponent: () => import('./pages/contact/contact').then((m) => m.Contact),
  },
  {
    path: '**',
    title: 'Page not found | Hearth & Crumb',
    loadComponent: () => import('./pages/not-found/not-found').then((m) => m.NotFound),
  },
];
