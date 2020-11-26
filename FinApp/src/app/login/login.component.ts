import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { ParametricasService } from '../service/parametricas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private pms: ParametricasService,
    private router: Router
  ) {}

  login = {
    correo: '',
    pass: '',
  };

  ngOnInit(): void {}

  autenticar() {
    this.auth.loginUsuario(this.login).subscribe(
      (res) => {
        console.log(res);
        localStorage.setItem('token', res.jwtToken);

        // crear colecciones parametricas
        this.pms.cargarDepartamento().subscribe(
          (res) => {
            console.log(res);
          },
          (err) => {
            console.log(err);
          }
        );

        // retornar al home
        this.router.navigate(['/home']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
