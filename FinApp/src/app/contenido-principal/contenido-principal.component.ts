import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service'

@Component({
  selector: 'app-contenido-principal',
  templateUrl: './contenido-principal.component.html',
  styleUrls: ['./contenido-principal.component.css']
})
export class ContenidoPrincipalComponent implements OnInit {

  constructor(public auth : AuthService) { }

  ngOnInit(): void {
  }

}
