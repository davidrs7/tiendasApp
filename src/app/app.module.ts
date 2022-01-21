import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// rutas
import { APP_ROUTING } from './app.routes';

//servicios
import { HeroesService } from './Services/heroes.service';


// componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscarHeroeComponent } from './components/buscar-heroe/buscar-heroe.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { TiendaService } from './Services/tienda.service';
import { ProductosComponent } from './components/productos/productos.component';
import { ProductoTarjetaComponent } from './components/producto-tarjeta/producto-tarjeta.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    BuscarHeroeComponent,
    HeroeTarjetaComponent,
    CategoriasComponent,
    ProductosComponent,
    ProductoTarjetaComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  //aqui van los servicios
  providers: [
    HeroesService,
    TiendaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
