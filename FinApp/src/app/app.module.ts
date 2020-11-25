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
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // esta referencia siempre va, independiente el framework de front utilizado (boostrap, matrial, otros)
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; // va igual si se configura https
import { AuthService } from './service/auth.service';

/*
const appRouter: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'perfiles', component: PerfilesComponent },
  { path: 'registro', component: RegistroComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];*/

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    /*
    ReactiveFormsModule,
    RouterModule,
    RouterModule.forRoot(appRouter)*/
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
