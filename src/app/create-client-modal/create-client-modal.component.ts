import { EventEmitter, Output } from '@angular/core';
import { Component } from '@angular/core';
import { NewClient } from 'src/shared/models/client';

@Component({
  selector: 'app-create-client-modal',
  templateUrl: './create-client-modal.component.html',
  styleUrls: ['./create-client-modal.component.css'],
})
export class CreateClientModalComponent {
  @Output() submitRequested = new EventEmitter<NewClient>();
  @Output() closed = new EventEmitter<void>();

  newClientData: NewClient = {
    name: '',
    email: '',
    password: '',
    phone: '',
    city: '',
    cep: '',
    province: '',
  };

  requestSubmit() {
    if (this.checkFormValidity()) {
      this.submitRequested.emit(this.newClientData);
      this.resetFormData();
    }
  }

  resetFormData(): void {
    this.newClientData = {
      name: '',
      email: '',
      password: '',
      phone: '',
      city: '',
      cep: '',
      province: '',
    };
  }

  checkFormValidity(): boolean {
    const requiredFields = [
      'name',
      'email',
      'password',
      'phone',
      'city',
      'cep',
      'province',
    ];

    return requiredFields.every((field) => this.newClientData[field].trim() !== '');
  }

  close() {
    this.closed.emit();
  }
}
