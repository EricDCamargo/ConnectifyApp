import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Client } from 'src/shared/models/client';

@Component({
  selector: 'app-edit-add-client-modal',
  templateUrl: './edit-add-client-modal.component.html',
  styleUrls: ['./edit-add-client-modal.component.css'],
})
export class EditAddClientModalComponent implements OnInit {
  @Input() selectedClient: Client | undefined;

  @Output() submitRequested = new EventEmitter<Client>();
  @Output() closed = new EventEmitter<void>();

  editedClient: Client = {
    id: 0,
    name: '',
    email: '',
    phone: '',
    addres: '',
    city: '',
    cep: '',
    province: '',
  };

  ngOnInit() {
    if (this.selectedClient) {
      this.editedClient = this.selectedClient;
    }
  }

  requestSubmit() {
    if (this.checkFormValidity()) {
      this.submitRequested.emit(this.editedClient);
      this.resetFormData();
    }
  }

  resetFormData(): void {
    this.editedClient = {
      id: 0,
      name: '',
      email: '',
      phone: '',
      addres: '',
      city: '',
      cep: '',
      province: '',
    };
  }

  checkFormValidity(): boolean {
    const requiredFields = [
      'name',
      'email',
      'phone',
      'addres',
      'city',
      'cep',
      'province',
    ];

    return requiredFields.every(
      (field) => this.editedClient[field].trim() !== ''
    );
  }

  close() {
    this.closed.emit();
  }
}
