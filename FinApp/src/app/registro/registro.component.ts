import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {}

  // lista tipo de usuario
  lstTipoUsuario = [
    { id: 1, nombre: 'Persona Natural' },
    { id: 2, nombre: 'Persona Jurídica' },
  ];
  objTipoUsuario = this.lstTipoUsuario[0];

  // lista tipo documento
  lstTipoDocumento = [
    { id: 1, nombre: 'Cédula de Ciudadania' },
    { id: 2, nombre: 'Cédula de Extranjería' },
    { id: 3, nombre: 'Nit' },
  ];
  objTipoDocumento = this.lstTipoDocumento[0];

  // lista departamentos
  lstDepartamento = [{ id: 1, nombre: 'Bogotá D.C', codigo: '11' }];
  objDepartamento = this.lstDepartamento[0];

  // lista ciudades
  lstCiudad = [{ id: 1, nombre: 'Bogotá D.C', codigo: '11001' }];
  objCiudad = this.lstCiudad[0];

  // Datos obtenidos desde el HTML
  registrarUsuarioEmp = {
    naturaleza: '',
    tipoDocumento: '',
    numeroDocumento: '',
    razonSocial: '',
    direccion: '',
    idDepartamento: '',
    idCiudad: '',
    correo: '',
    pass: '',
  };

  ngOnInit(): void {}

  registrarEmp() {
    this.registrarUsuarioEmp.naturaleza = this.objTipoUsuario.nombre;
    this.registrarUsuarioEmp.tipoDocumento = this.objTipoDocumento.nombre;
    this.registrarUsuarioEmp.idDepartamento = this.objDepartamento.codigo;
    this.registrarUsuarioEmp.idCiudad = this.objCiudad.codigo;

    this.auth.registroUsuario(this.registrarUsuarioEmp).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/login']); // ir al login
      },
      (err) => console.log(err)
    );
  }
}
