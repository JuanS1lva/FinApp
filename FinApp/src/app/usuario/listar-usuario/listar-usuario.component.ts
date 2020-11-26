import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css'],
})
export class ListarUsuarioComponent implements OnInit {
  constructor(private usuario: AuthService, private router: Router) {}

  lista = [];

  ngOnInit(): void {
    this.usuario.listarUsuarioEmp().subscribe(
      (res) => {
        this.lista = res.listaUsuarios;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
