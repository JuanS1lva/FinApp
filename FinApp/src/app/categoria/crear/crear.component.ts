import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  nuevaCategoria = {
    nombreCategoria:'',
    subCategorias:[],
    descripcion:''
  }

  ngOnInit(): void {
  }
  
  registrar(){
    this.auth.registrarCategoria(this.nuevaCategoria).subscribe(
      (res) => {
        console.log(res);
      },
      (err) =>{
        console.log(err)
      }
    )
  }

}
