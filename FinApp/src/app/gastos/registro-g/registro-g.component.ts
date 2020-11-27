import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { GastoService } from '../../service/gasto.service';
import { CategoriaService } from '../../service/categoria.service';
import { SedeService } from '../../service/sede.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-g',
  templateUrl: './registro-g.component.html',
  styleUrls: ['./registro-g.component.css'],
})
export class RegistroGComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private router: Router,
    private gasto: GastoService,
    private categoria: CategoriaService,
    private sede: SedeService
  ) {}

  nuevoGasto = {
    categoria: '',
    subCategorias: '',
    descripcion: '',
    monto: '',
    sede: '',
    proveedor: '',
    usuarioResponsable: '',
  };

  categorias = [];
  sedes = [];
  subCategorias = '';
  responsables = [];
  activeCat = { subCategorias: [], nombreCategoria: '' };

  ngOnInit(): void {
    this.categoria.listarCategoria().subscribe(
      (res) => {
        this.categorias = res;
      },
      (err) => {
        console.log(err);
      }
    );

    this.sede.listarSede().subscribe(
      (res) => {
        this.sedes = res;
      },
      (err) => {
        console.log(err);
      }
    );

    this.auth.listarUsuarioEmp().subscribe(
      (res) => {
        this.responsables = res.listaUsuarios;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  registrar() {
    this.nuevoGasto = {
      ...this.nuevoGasto,
      categoria: this.activeCat.nombreCategoria,
    };
    this.gasto.crearGasto(this.nuevoGasto).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/listarGasto']); // ir al listar de gasto
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
