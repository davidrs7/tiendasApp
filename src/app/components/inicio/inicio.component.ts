import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  mensajeInicio:string;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.mensajeInicio = 'Hola!, haz clic en la imagen para conocer nuestros productos';
  }

  iraTienda(){
    this.router.navigate(['/categorias'])
  }

  traerImagen(id:number){
    let imagenRetorno =''
    if (id == 1) { imagenRetorno = 'assets/img/Productos/Inicio.PNG' }
    if (id == 2) { imagenRetorno = 'assets/img/Productos/inicio3.PNG' }
    if (id == 3) { imagenRetorno = 'assets/img/Productos/inicio4.PNG' }
    return imagenRetorno;
  }

}
