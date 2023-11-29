import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SignUpCredentials } from 'src/shared/models/auth';
import { AuthService } from 'src/shared/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  loading = false;
  userData: SignUpCredentials = {
    name: '',
    email: '',
    password: '',
  };

  constructor(
    private authService: AuthService,
    private toastr: ToastrService
  ) {}

  async handleSignUp(): Promise<void> {
    const { name, email, password } = this.userData;

    if (!name || !email || !password) {
      return;
    }

    try {
      this.loading = true;
      await this.authService.signUp(this.userData);
      this.toastr.success('Cadastro realizado com sucesso!', 'Sucesso');
    } catch (error) {
      this.toastr.error('Erro durante o cadastro. Tente novamente.', 'Erro');
    } finally {
      this.loading = false;
    }
  }

  handleChange(event: any): void {
    const { name, value } = event.target;
    this.userData = { ...this.userData, [name]: value };
  }
}
