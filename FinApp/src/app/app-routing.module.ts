import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { PerfilesComponent } from './perfiles/perfiles.component';
import { CrearComponent } from './categoria/crear/crear.component';

// Navegación de la aplicación
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'registro',
    component: RegistroComponent,
  },
  {
    path: 'perfiles',
    component: PerfilesComponent,
  },
  {
    path: 'categoria',
    component:CrearComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
