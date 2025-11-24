import { Routes } from '@angular/router';
import { HomeComponent } from './features/client/pages/home/home.component';
import { BankAccount } from './features/client/pages/bank-account/bank-account';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'register-account',
    component: BankAccount
  }
];
