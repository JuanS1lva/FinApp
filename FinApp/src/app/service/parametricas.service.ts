import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // va igual si se configura https
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ParametricasService {
  private departamentoUrl = `${environment.apiUrl}/departamento`;

  constructor(private http: HttpClient) { }

  cargarDepartamento() {
    //retorna un objeto denominado observable
    return this.http.post<any>(this.departamentoUrl, null);
  }
}
