import { Component, OnInit } from '@angular/core';
import { SedeService } from '../../service/sede.service';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-sede',
  templateUrl: './crear-sede.component.html',
  styleUrls: ['./crear-sede.component.css'],
})
export class CrearSedeComponent implements OnInit {
  constructor(
    private sede: SedeService,
    private usuario: AuthService,
    private router: Router
  ) {}

  objSede = {
    nombre: '',
    descripcion: '',
    idUsuarioResponsable: '',
    habilitado: '',
  };

  lstUsuarios = [];
  objUsuario = this.lstUsuarios[0];

  ngOnInit(): void {
    this.usuario.listarUsuario().subscribe(
      (res) => {
        this.lstUsuarios = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  crearSede() {
    this.objSede.idUsuarioResponsable = this.objUsuario._id;
    this.objSede.habilitado = this.objSede.habilitado == '1' ? 'true' : 'false';
    
    this.sede.crearSede(this.objSede).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/listarSede']); // ir al listar de sedes
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
