import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private apiUrl = 'http://localhost:8080/client';

  constructor(private http: HttpClient) {}

  getClientsByUserId(userId: number): Observable<Client[]> {
    const url = `${this.apiUrl}?user_id=${userId}`;
    return this.http.get<Client[]>(url);
  }

  createClient(newClient: Client, userId: number): Observable<Client> {
    const url = `${this.apiUrl}?user_id=${userId}`;
    return this.http.post<Client>(url, newClient);
  }

  editClient(updatedClient: Client): Observable<Client> {
    const url = `${this.apiUrl}/${updatedClient.id}`;
    return this.http.put<Client>(url, updatedClient);
  }

  deleteClient(clientId: number): Observable<void> {
    const url = `${this.apiUrl}/${clientId}`;
    return this.http.delete<void>(url);
  }
}
