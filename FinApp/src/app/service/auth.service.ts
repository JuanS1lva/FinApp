import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // va igual si se configura https
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private registroUrl = `${environment.apiUrl}/usuario`;
  private loginUrl = `${environment.apiUrl}/auth`;
  private categoriaUrl = `${environment.apiUrl}/categorias`;
  private empUsuarioUrl = `${environment.apiUrl}/empusuario/lista`;
  private usuarioUrl = `${environment.apiUrl}/empusuario/listacontrol`;

  constructor(private http: HttpClient) {}

  listarUsuarioEmp(){
    return this.http.get<any>(this.empUsuarioUrl);
  }

  listarUsuario(){
    return this.http.get<any>(this.usuarioUrl);
  }

  registroUsuario(usuario) {
    //retorna un objeto denominado observable
    return this.http.post<any>(this.registroUrl, usuario);
  }

  loginUsuario(usuario) {
    return this.http.post<any>(this.loginUrl, usuario);
  }

  registrarCategoria(categoria) {
    return this.http.post<any>(this.categoriaUrl, categoria);
  }

  loginOn(){
    return !!localStorage.getItem('token')
  }

  obtenerToken(){
    return localStorage.getItem('token')
  }
}
