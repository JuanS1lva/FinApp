import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
<<<<<<< HEAD
import { FooterComponent } from './footer/footer.component';
=======
import { BannerComponent } from './banner/banner.component';
>>>>>>> 56d02d3a3eadbc0e6329e3326568d068dcf03c6d

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NavbarComponent,
<<<<<<< HEAD
    FooterComponent
=======
    BannerComponent
>>>>>>> 56d02d3a3eadbc0e6329e3326568d068dcf03c6d
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
