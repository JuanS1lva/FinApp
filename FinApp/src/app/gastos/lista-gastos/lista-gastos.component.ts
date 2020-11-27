import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { GastoService } from '../../service/gasto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-gastos',
  templateUrl: './lista-gastos.component.html',
  styleUrls: ['./lista-gastos.component.css']
})
export class ListaGastosComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router, private gasto: GastoService) { }

  lista=[]

  ngOnInit(): void {
    this.gasto.listarGastoEmp().subscribe(
      (res)=>{
        this.lista=res;
      },
      (err)=>{
        console.log(err)
      }
    )
  }

  eliminar(item){
    this.gasto.eliminarGasto(item).subscribe(
      (res)=>{
        const index = this.lista.indexOf(item);
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
