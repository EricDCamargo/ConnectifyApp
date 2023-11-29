import { Component, OnInit } from '@angular/core';
import { Client } from 'src/shared/models/client';
import { UserService } from 'src/shared/services/users/user.service';
import { ClientService } from 'src/shared/services/client.service';
import { User } from 'src/shared/models/user';
import { Observer, first } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  userDetails: User | null = null;

  constructor(
    private userService: UserService,
    private clientService: ClientService
  ) {}

  ngOnInit(): void {
    this.loadUserDetails();
  }

  loadUserDetails(): void {
    const loggedInUserId = this.userService.getLoggedInUser()?.id;
    if (loggedInUserId) {
      this.userService.getUserById(loggedInUserId).subscribe({
        next: (userDetails) => {
          this.userDetails = userDetails;
        },
        error: (error) => {
          console.error('Error loading user details', error);
        },
        complete: () => {
          // Lógica quando a operação é concluída
        },
      });
    }
  }

  addClient(): void {
    const loggedInUserId = this.userService.getLoggedInUser()?.id;
    if (loggedInUserId) {
      const newClient: Client = {
        name: 'Novo Cliente',
        email: 'email@gmail.com',
        password: '123456',
        phone: '(11) 11111-1111',
        city: 'Salto',
        cep: '131313-133',
        province: 'SP',
      };

      const observer: Observer<Client> = {
        next: () => {
          // Recarrega os detalhes do usuário
          this.loadUserDetails();
        },
        error: (error) => {
          console.error('Error creating client', error);
        },
        complete: () => {
          // Você pode adicionar lógica de conclusão aqui, se necessário
        },
      };

      this.clientService
        .createClient(newClient, loggedInUserId)
        .subscribe(observer);
    }
  }

  deleteClient(client: Client): void {
    const confirmDelete = confirm(`Deseja excluir o cliente "${client.name}"?`);
    if (confirmDelete) {
      this.clientService.deleteClient(client.id!).subscribe({
        next: () => {
          this.loadUserDetails();
        },
        error: (error) => {
          console.error('Error deleting client', error);
        },
      });
    }
  }
}
