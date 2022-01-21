import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component'; 
import { HomeComponent } from './components/home/home.component'; 
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscarHeroeComponent } from './components/buscar-heroe/buscar-heroe.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ProductoTarjetaComponent } from './components/producto-tarjeta/producto-tarjeta.component';


const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'heroe/:id', component: HeroeComponent },
    { path: 'buscar-heroe/:Texto', component: BuscarHeroeComponent },
    { path: 'categorias', component: CategoriasComponent},
    { path: 'productos/:id', component: ProductosComponent},
    { path: 'producto', component: ProductoTarjetaComponent},
    { path: '**',pathMatch: 'full', redirectTo : 'home'}


    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];
 

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);