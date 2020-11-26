import { Component, OnInit } from '@angular/core';
import { SedeService } from '../../service/sede.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-sede',
  templateUrl: './listar-sede.component.html',
  styleUrls: ['./listar-sede.component.css'],
})
export class ListarSedeComponent implements OnInit {
  constructor(private sede: SedeService, private router: Router) {}

  lista = [];

  ngOnInit(): void {
    this.sede.listarSede().subscribe(
      (res) => {
        this.lista = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
