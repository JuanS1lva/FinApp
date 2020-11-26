import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css'],
})
export class CrearUsuarioComponent implements OnInit {
  constructor(private usuario: AuthService, private router: Router) {}

  // lista tipo documento
  lstTipoDocumento = [
    { id: 1, nombre: 'Cédula de Ciudadania' },
    { id: 2, nombre: 'Cédula de Extranjería' },
    { id: 3, nombre: 'Nit' },
  ];
  objTipoDocumento = this.lstTipoDocumento[0];

  // lista rol
  lstRoles = [
    { id: 1, nombre: 'Administrador' },
    { id: 2, nombre: 'Invitado' },
  ];
  objRol = this.lstRoles[0];

  // Datos obtenidos desde el HTML
  usuarioSistema = {
    nombreApellido: '',
    tipoDocumento: '',
    numeroDocumento: '',
    cargo: '',
    rol: [],
    correo: '',
    pass: '',
  };

  ngOnInit(): void {}

  crearUsuario() {
    this.usuarioSistema.tipoDocumento = this.objTipoDocumento.nombre;
    this.usuarioSistema.rol.push(this.objRol.nombre);

    this.usuario.crearUsuarioSistema(this.usuarioSistema).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/listarUsuario']); // ir al listar de usuarios
      },
      (err) => console.log(err)
    );
  }
}
