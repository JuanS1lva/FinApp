import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // va igual si se configura https
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) {}

  private listaUrl = `${environment.apiUrl}/categoria/listaCategorias`;
  private crearUrl = `${environment.apiUrl}/categoria`;

  listarCategoria() {
    return this.http.get<any>(this.listaUrl);
  }

  crearCategoria(categoria) {
    return this.http.post<any>(this.crearUrl, categoria);
  }

  editarCategoria(categoria) {
    return this.http.put<any>(this.crearUrl, categoria);
  }
  eliminarCategoria(categoria) {
    const _id = categoria._id
    const url = `${this.crearUrl}/${_id}`
    return this.http.delete<any>(url);
  }
}
