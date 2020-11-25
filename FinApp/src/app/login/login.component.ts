import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  login = {
    correo:'',
    pass:''
  }

  ngOnInit(): void {
  }
  
  autenticar(){
    this.auth.loginUsuario(this.login).subscribe(
      (res) => {
        console.log(res);
        localStorage.setItem('token',res.jwtToken)
        this.router.navigate(['/home'])
      },
      (err) =>{
        console.log(err)
      }
    )
  }

}
