import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SignInCredentials } from '../../shared/models/auth';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  loading = true;
  userData: SignInCredentials = {
    email: '',
    password: '',
  };

  constructor(private authService: AuthService, private router: Router) {}

  async handleLogin(): Promise<void> {
    const { email, password } = this.userData;

    if (!email || !password) {
      return;
    }

    this.loading = true;

    try {
      await this.authService.signIn(this.userData);
      this.router.navigate(['/dashboard']);
    } catch (error) {
    } finally {
      this.loading = false;
    }
  }

  handleChange(event: any): void {
    const { name, value } = event.target;
    this.userData = { ...this.userData, [name]: value };
  }
}
