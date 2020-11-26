import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-contenido-principal',
  templateUrl: './contenido-principal.component.html',
  styleUrls: ['./contenido-principal.component.css'],
})
export class ContenidoPrincipalComponent implements OnInit {
  constructor(public auth: AuthService) {}

  infoUsuario = {
    empresa: '',
    direccion: '',
    nombreUsuario: '',
    cargoUsuario: '',
  };

  ngOnInit(): void {
    this.auth.listarUsuarioEmp().subscribe(
      (res) => {
        this.infoUsuario.empresa = res.empresa;
        this.infoUsuario.direccion = res.direccion;
        this.infoUsuario.nombreUsuario = res.nombreUsuario;
        this.infoUsuario.cargoUsuario = res.cargoUsuario;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
