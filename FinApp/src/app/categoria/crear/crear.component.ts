import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { CategoriaService } from '../../service/categoria.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css'],
})
export class CrearComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private router: Router,
    private categoria: CategoriaService
  ) {}

  nuevaCategoria = {
    nombreCategoria: '',
    subCategorias: [],
    descripcion: '',
  };

  ngOnInit(): void {}

  registrar() {
    this.categoria.crearCategoria(this.nuevaCategoria).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/listarCategorias']); // ir al listar de categorias
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
