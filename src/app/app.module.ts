import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// rutas
import { APP_ROUTING } from './app.routes';


// componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { TiendaService } from './Services/tienda.service';
import { ProductosComponent } from './components/productos/productos.component';
import { ProductoTarjetaComponent } from './components/producto-tarjeta/producto-tarjeta.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { MediosPagoComponent } from './components/medios-pago/medios-pago.component';
import { FooterComponent } from './components/shared/footer/footer/footer.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { CurrencyPipe } from '@angular/common'; 
import { modelos } from './Services/interfaces/modelos';
import { referencias, productoPorIdReferencia, productoxIdColoryReferencia } from './Services/interfaces/referencias';
 


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    CategoriasComponent,
    ProductosComponent,
    ProductoTarjetaComponent,
    InicioComponent,
    MediosPagoComponent,
    FooterComponent,
    CarritoComponent      
  ],
  imports: [
    BrowserModule, 
    APP_ROUTING
  ],
  //aqui van los servicios
  providers: [
    TiendaService,
    CurrencyPipe,
    modelos
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
