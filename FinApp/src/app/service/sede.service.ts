import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // va igual si se configura https
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SedeService {
  constructor(private http: HttpClient) {}

  private listaUrl = `${environment.apiUrl}/sede/lista`;
  private crearUrl = `${environment.apiUrl}/sede`;

  listarSede() {
    return this.http.get<any>(this.listaUrl);
  }

  crearSede(sede) {
    return this.http.post<any>(this.crearUrl, sede);
  }
}
