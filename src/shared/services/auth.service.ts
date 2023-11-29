import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { SignInCredentials, SignUpCredentials } from '../models/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/auth';

  constructor(private http: HttpClient) {}

  signIn(credentials: SignInCredentials): Observable<any> {
    const url = `${this.apiUrl}/signin`;
    return this.http.post<any>(url, credentials).pipe(
      tap((response) => {
        console.log('Usuário autenticado com sucesso', response);
      }),
      catchError((error) => {
        console.error('Erro durante o login', error);
        return of(null);
      })
    );
  }

  signUp(credentials: SignUpCredentials): Observable<any> {
    const url = `${this.apiUrl}/signup`;
    return this.http.post<any>(url, credentials).pipe(
      tap((response) => {
        console.log('Usuário cadastrado com sucesso', response);
      }),
      catchError((error) => {
        console.error('Erro durante o cadastro', error);
        return of(null);
      })
    );
  }
}
