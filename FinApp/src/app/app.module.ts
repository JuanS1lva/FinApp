import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/*mport { RouterModule, Routes } from '@angular/router';*/

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { EquipoComponent } from './equipo/equipo.component';
import { PerfilesComponent } from './perfiles/perfiles.component';
import { ContenidoPrincipalComponent } from './contenido-principal/contenido-principal.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // FormsModule: esta referencia siempre va, independiente el framework de front utilizado (boostrap, matrial, otros). ReactiveFormsModule: se referencia para que funciones junto con el Interceptor
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; // va igual si se configura https
import { AuthService } from './service/auth.service';
import { CrearComponent } from './categoria/crear/crear.component';
import { ListaComponent } from './categoria/lista/lista.component';
import { AuthGuard } from './guard/auth.guard';
import { TokenInterceptorService } from './service/token-interceptor.service';
import { ListarSedeComponent } from './sede/listar-sede/listar-sede.component';
import { CrearSedeComponent } from './sede/crear-sede/crear-sede.component';
import { SedeService } from './service/sede.service';
import { CategoriaService } from './service/categoria.service';
import { CrearUsuarioComponent } from './usuario/crear-usuario/crear-usuario.component';
import { ListarUsuarioComponent } from './usuario/listar-usuario/listar-usuario.component';
import { RegistroGComponent } from './gastos/registro-g/registro-g.component';
import { ListaGastosComponent } from './gastos/lista-gastos/lista-gastos.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    BannerComponent,
    EquipoComponent,
    PerfilesComponent,
    ContenidoPrincipalComponent,
    RegistroComponent,
    LoginComponent,
    CrearComponent,
    ListaComponent,
    ListarSedeComponent,
    CrearSedeComponent,
    CrearUsuarioComponent,
    ListarUsuarioComponent,
    RegistroGComponent,
    ListaGastosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    AuthService,
    SedeService,
    CategoriaService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
