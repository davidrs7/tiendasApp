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
    console.log('Hola mundo');

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

  FinalizarPedido(metodoEntrega: number){

    let numeroWspBlinders = '+573124379303';
      window.location.href = 'https://api.whatsapp.com/send?phone='+ numeroWspBlinders +'&text=Hola%20este%20es%20mi%20pedido:%20%F0%9F%91%95%F0%9F%91%95%F0%9F%91%95%0A6%20Busos%20capoteros%20Talla%20M%20...%20Valor%20unidad:%2033.000%20%0A5%20Chaquetas%20Verde%20Neon%20Talla%20XL%20..%20Valor%20unidad:%2038.000%0A2%20Busos%20capota%20ni%C3%B1o%20Talla%2016%20...%20Valor%20unidad:%2030.000https://api.whatsapp.com/send?phone=+573124379303&text=Hola%20este%20es%20mi%20pedido:%20%F0%9F%91%95%F0%9F%91%95%F0%9F%91%95%0A6%20Busos%20capoteros%20Talla%20M%20...%20Valor%20unidad:%2033.000%20%0A5%20Chaquetas%20Verde%20Neon%20Talla%20XL%20..%20Valor%20unidad:%2038.000%0A2%20Busos%20capota%20ni%C3%B1o%20Talla%2016%20...%20Valor%20unidad:%2030.000%201%20domicilio%20...%20Valor%20unidad:%2010.000%20Total%20a%20pagar%20=%20%20$108.000%20%0A-----------------------------------------------------------%20Mis%20datos%20son:%20%F0%9F%93%9D%F0%9F%93%9D%0ANombres:%20David%20Rodriguez%20Rivera%0ATelefono:%203124379303%20%0ADirecci%C3%B3n%20Entrega:%20Calle%2013%20sur%2014%2061%20este%20Barrio:%20San%20cristobal%20sur1%20domicilio%20...%20Valor%20unidad:%2010.000https://api.whatsapp.com/send?phone=+573124379303&text=Hola%20este%20es%20mi%20pedido:%20%F0%9F%91%95%F0%9F%91%95%F0%9F%91%95%0A6%20Busos%20capoteros%20Talla%20M%20...%20Valor%20unidad:%2033.000%20%0A5%20Chaquetas%20Verde%20Neon%20Talla%20XL%20..%20Valor%20unidad:%2038.000%0A2%20Busos%20capota%20ni%C3%B1o%20Talla%2016%20...%20Valor%20unidad:%2030.000%201%20domicilio%20...%20Valor%20unidad:%2010.000%20Total%20a%20pagar%20=%20%20$108.000%20%0A-----------------------------------------------------------%20Mis%20datos%20son:%20%F0%9F%93%9D%F0%9F%93%9D%0ANombres:%20David%20Rodriguez%20Rivera%0ATelefono:%203124379303%20%0ADirecci%C3%B3n%20Entrega:%20Calle%2013%20sur%2014%2061%20este%20Barrio:%20San%20cristobal%20surTotal%20a%20pagar%20=%20%20$108.000%20%0A-----------------------------------------------------------https://api.whatsapp.com/send?phone=+573124379303&text=Hola%20este%20es%20mi%20pedido:%20%F0%9F%91%95%F0%9F%91%95%F0%9F%91%95%0A6%20Busos%20capoteros%20Talla%20M%20...%20Valor%20unidad:%2033.000%20%0A5%20Chaquetas%20Verde%20Neon%20Talla%20XL%20..%20Valor%20unidad:%2038.000%0A2%20Busos%20capota%20ni%C3%B1o%20Talla%2016%20...%20Valor%20unidad:%2030.000%201%20domicilio%20...%20Valor%20unidad:%2010.000%0ATotal%20a%20pagar%20=%20%20$108.000%20%0A-----------------------------------------------------------%0AMis%20datos%20son:%20%F0%9F%93%9D%F0%9F%93%9D%0ANombres:%20David%20Rodriguez%20Rivera%0ATelefono:%203124379303%20%0ADirecci%C3%B3n%20Entrega:%20Calle%2013%20sur%2014%2061%20este%0ABarrio:%20San%20cristobal%20sur';
  }

  

}
