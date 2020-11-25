import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // va igual si se configura https
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private registroUrl = `${environment.apiUrl}/usuario/`;
  private loginUrl = `${environment.apiUrl}/auth/`;

  constructor(private http: HttpClient) {}

  registroUsuario(usuario) {
    //retorna un objeto denominado observable
    return this.http.post<any>(this.registroUrl, usuario);
  }

  loginUsuario(usuario) {
    return this.http.post<any>(this.loginUrl, usuario);
  }
}
