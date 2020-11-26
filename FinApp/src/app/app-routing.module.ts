import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { PerfilesComponent } from './perfiles/perfiles.component';
import { CrearComponent } from './categoria/crear/crear.component';
import { ListarSedeComponent } from './sede/listar-sede/listar-sede.component';
import { CrearSedeComponent } from './sede/crear-sede/crear-sede.component';
import { AuthGuard } from './guard/auth.guard';
import { ListaComponent } from './categoria/lista/lista.component';

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
    path: 'listarCategorias/categoria',
    component: CrearComponent,
  },
  {
    path: 'listarCategorias',
    component: ListaComponent,
  },
  {
    path: 'listarSede',
    component: ListarSedeComponent,
    // canActivate: [AuthGuard],
  },
  {
    path: 'listarSede/crearSede',
    component: CrearSedeComponent,
    // canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
