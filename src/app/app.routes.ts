import { Routes } from '@angular/router';
import { DashboardComponent } from 'src/pages/dashboard/dashboard.component';
import { SignInComponent } from 'src/pages/sign-in/sign-in.component';
import { SignUpComponent } from 'src/pages/sign-up/sign-up.component';

export const routes: Routes = [
  { path: '', component: SignInComponent },
  { path: 'signUp', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent },
];
