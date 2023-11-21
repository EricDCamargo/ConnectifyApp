import { Routes } from '@angular/router';
import { DashboardComponent } from 'src/components/dashboard/dashboard.component';
import { SignInComponent } from 'src/components/sign-in/sign-in.component';
import { SignUpComponent } from 'src/components/sign-up/sign-up.component';

export const routes: Routes = [
  { path: '', component: SignInComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent },
];
