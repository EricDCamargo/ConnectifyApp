import { Component, OnInit } from '@angular/core';
import { Client, NewClient } from 'src/shared/models/client';
import { ClientService } from 'src/shared/services/client.service';
import { catchError, finalize, tap } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  clients: Client[] = [];
  filteredClients: Client[] = [];
  loading = true;
  showCreateModal = false;
  showEditModal = false;
  editingClient: Client | undefined = undefined;

  searchTerm = '';

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.getClients();
  }

  // MODAIS
  openCreateModal(): void {
    this.showCreateModal = true;
  }

  closeCreateModal(): void {
    this.showCreateModal = false;
  }

  openEditModal(client: Client): void {
    this.editingClient = { ...client };
    this.showEditModal = true;
  }

  closeEditModal() {
    this.showEditModal = false;

    this.editingClient = undefined;
  }

  // MODAIS

  getClients(): void {
    this.clientService.getClients().subscribe({
      next: (clients) => {
        this.clients = clients;
        this.filteredClients = this.clients;
      },
      error: (error) => {
        throw error;
      },
      complete: () => (this.loading = false),
    });
  }

  createClient(newClient: NewClient): void {
    this.clientService.createClient(newClient).subscribe({
      next: () => {
        this.getClients();
        this.closeCreateModal();
      },
      error: (error) => {
        throw error;
      },
    });
  }

  editClient(updatedClient: Client): void {
    this.clientService.editClient(updatedClient).subscribe({
      next: () => {
        this.getClients();
        this.closeEditModal();
      },
      error: (error) => {
        throw error;
      },
    });
  }

  deleteClient(clientId: number): void {
    const confirmDelete = confirm(
      'Are you sure you want to delete this client?'
    );

    if (confirmDelete) {
      this.clientService.deleteClient(clientId).subscribe({
        next: () => this.getClients(),
        error: (error) => {
          throw error;
        },
      });
    }
  }

  filterClients(): void {
    if (this.searchTerm.trim() === '') {
      this.filteredClients = this.clients;
    } else {
      this.filteredClients = this.clients.filter(
        (client) =>
          client.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          client.email.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }
}
