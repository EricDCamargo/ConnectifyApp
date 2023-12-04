import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client, NewClient } from '../models/client';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private apiUrl = 'http://localhost:8080/clients';

  constructor(private http: HttpClient) {}

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.apiUrl);
  }

  createClient(newClient: NewClient): Observable<Client> {
    return this.http.post<Client>(this.apiUrl, newClient);
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
