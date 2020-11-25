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

  lstTipoUsuario = [
    { id: 1, nombre: 'Persona Natural' },
    { id: 2, nombre: 'Persona Jurídica' },
  ];
  objTipoUsuario = this.lstTipoUsuario[0];

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
    console.log('DatosEmpresa: ', this.registrarUsuarioEmp);
    //console.log('DatosTipoUusario: ', this.objTipoUsuario);
    //console.log('DatosTipoUusarioNombre: ', this.objTipoUsuario.nombre);

    /*
    this.auth.registroUsuario(this.registrarUsuarioEmp).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => console.log(err)
    );*/
  }
}
