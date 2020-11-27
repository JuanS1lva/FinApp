import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { CategoriaService } from '../../service/categoria.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router, private categoria: CategoriaService) { }

  lista = []

  ngOnInit(): void {
    this.categoria.listarCategoria().subscribe(
      (res)=>{
        this.lista=res;
      },
      (err)=>{
        console.log(err)
      }
    )
  }

  cambiarEstado(listaElegida, activa){
    const activaTemp = listaElegida.activa;
    listaElegida.activa = activa
    this.categoria.editarCategoria(listaElegida).subscribe(
      (res)=>{
        listaElegida.activa = activa
      },
      (err)=>{
        console.log(err)
        listaElegida.activa = activaTemp
      }
    )
  }

  eliminar(listaElegida){
    this.categoria.eliminarCategoria(listaElegida).subscribe(
      (res)=>{
        const index = this.lista.indexOf(listaElegida);
        if(index > -1){
          this.lista.splice(index,1);
        }
      },
      (err)=>{
        console.log(err)
      }
    )
  }
}
