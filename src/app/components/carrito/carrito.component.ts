import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  precio: any = 33000;
  totalFactura: any = 0;
  cantidad: any = 0; 
  productos: any[] = []; 

  constructor() {
    this.precio.toLocaleString("es-CO", {
      style: "currency",
      currency: "COP"
    });

    this.productos = JSON.parse(localStorage.getItem('productoCarrito')) != null ? JSON.parse(localStorage.getItem('productoCarrito')) : this.productos;
    this.calcularTotalFactura();

  }

  ngOnInit(): void {
    console.log(this.cantidad)

  }

  restarCantidad(i: number) {
    this.productos[i].cantidadEnviada = this.productos[i].cantidadEnviada <= 0 ? 0 : this.productos[i].cantidadEnviada - 1;
    this.productos[i].vlrTotal = this.productos[i].cantidadEnviada * this.productos[i].vlrUnidad
    if (this.productos[i].cantidadEnviada == 0) {
      this.productos = this.productos.filter(x => x.cantidadEnviada > 0)
    }
    console.log(this.productos); 
    this.calcularTotalFactura();
    this.ActualizaStorage();
  }

  sumarCantidad(i: number) {
    console.log(this.productos[i]);

    if (parseInt(this.productos[i].cantidadEnviada) + 1 > this.productos[i].cantidadDisponible)
    {
       alert("Excede cantidad disponible en el inventario")
    }
    this.productos[i].cantidadEnviada = parseInt(this.productos[i].cantidadEnviada) + 1 > this.productos[i].cantidadDisponible ? this.productos[i].cantidadDisponible : parseInt(this.productos[i].cantidadEnviada) + 1;

    

    this.productos[i].vlrTotal = this.productos[i].cantidadEnviada * this.productos[i].vlrUnidad;
    this.calcularTotalFactura();
    this.ActualizaStorage();
  }

  calcularTotalFactura() {
    this.totalFactura = 0;
    for (let i = 0; i < this.productos.length; i++) {
      this.totalFactura += this.productos[i].vlrTotal
    }
  }

  ActualizaStorage(){
    localStorage.setItem('productoCarrito', JSON.stringify(this.productos));
    localStorage.setItem('notificacion',  this.productos.length.toString());
  }

}
