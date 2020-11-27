import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // va igual si se configura https
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GastoService {

  constructor(private http: HttpClient) { }
  
  private listaUrl = `${environment.apiUrl}/gasto/lista`;
  private listaEmpUrl = `${environment.apiUrl}/gasto/listaemp`;
  private crearUrl = `${environment.apiUrl}/gasto`;


  listarGasto() {
    return this.http.get<any>(this.listaUrl);
  }

  listarGastoEmp() {
    return this.http.get<any>(this.listaEmpUrl);
  }

  crearGasto(gasto) {
    return this.http.post<any>(this.crearUrl, gasto);
  }

  eliminarGasto(categoria) {
    const _id = categoria._id
    const url = `${this.crearUrl}/${_id}`
    return this.http.delete<any>(url);
  }

}
