import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component'; 
import { CategoriasComponent } from './components/categorias/categorias.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ProductoTarjetaComponent } from './components/producto-tarjeta/producto-tarjeta.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { MediosPagoComponent } from './components/medios-pago/medios-pago.component';
import { CarritoComponent } from './components/carrito/carrito.component';


const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'categorias', component: CategoriasComponent},
    { path: 'inicio', component: InicioComponent},
    { path: 'medios-pago', component: MediosPagoComponent},
    { path: 'productos/:refCodigo', component: ProductosComponent},
    { path: 'producto/:refCodigo/:colorCodigo', component: ProductoTarjetaComponent},
    { path: 'carrito', component: CarritoComponent},
    { path: '**',pathMatch: 'full', redirectTo : 'inicio'}


    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];
 

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);