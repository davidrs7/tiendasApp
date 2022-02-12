 import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

 
  precio:any = 33000;
  cantidad: any = 0;
 
  constructor() {    
    this.precio.toLocaleString("es-CO", {
      style: "currency",
      currency: "COP"
    });
   }

  ngOnInit(): void {
    console.log(this.cantidad)
  }

  restarCantidad(){
    this.cantidad = this.cantidad <= 0 ? 0 : this.cantidad -1 ;
  }

  sumarCantidad(){
    this.cantidad = this.cantidad + 1;
  }



}
