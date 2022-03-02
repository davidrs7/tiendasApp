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

}
