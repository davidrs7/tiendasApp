import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core'; 
import { Router, ActivatedRoute } from '@angular/router';
 

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
  valorDomicilio = 10000;
  @ViewChild("floatingNombres") floatingNombres: ElementRef;
  @ViewChild("floatingTelefono") floatingTelefono: ElementRef;
  @ViewChild("floatingCuidad") floatingCuidad: ElementRef;
  @ViewChild("floatingDireccion") floatingDireccion: ElementRef;
  @ViewChild("floatingBarrio") floatingBarrio: ElementRef;

  constructor(private router: Router
    ,private activatedRoute: ActivatedRoute) {
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

    if (parseInt(this.productos[i].cantidadEnviada) + 1 > this.productos[i].cantidadDisponible) {
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

  ActualizaStorage() { 

    this.productos.length == 0 ?  (localStorage.removeItem('productoCarrito'),localStorage.removeItem('notificacion') ) :  (localStorage.setItem('productoCarrito', JSON.stringify(this.productos)),localStorage.setItem('notificacion', this.productos.length.toString()));
    ;
  }

  validaProductos():boolean{ 
    let resp = false; 
   localStorage.getItem('productoCarrito') == null  ?  resp = true :  resp;

      return resp;

  }

  FinalizarPedido(metodoEntrega: number) {

    if (this.validaCamposForm()) {
      let numeroWspBlinders = '+573124379303';
      let cadenaProductos = this.cadenaProductos();
      var redirection = 'https://api.whatsapp.com/send?phone= ' + numeroWspBlinders + '&text=Hola%20este%20es%20mi%20pedido:%20%F0%9F%91%95%F0%9F%91%95%F0%9F%91%95%0A' + this.cadenaProductos() + this.cadenaMetodoEntrega(metodoEntrega);
      this.limpiarFormulario();
      alert('Gracias por tu compra! ahora vas a ser redirigido a nuestro whatsapp para confirmar tu orden')
      window.open(redirection);
    }
  }
  limpiarFormulario() {
    this.floatingNombres.nativeElement.value = '',
    this.floatingTelefono.nativeElement.value = '',
    this.floatingDireccion.nativeElement.value = '',
    this.floatingCuidad.nativeElement.value = '',
    this.floatingBarrio.nativeElement.value = '';
    localStorage.removeItem('productoCarrito');
    localStorage.removeItem('notificacion');
    this.router.navigate(['/categorias']);
  }

  validaCamposForm(): boolean {
    let formValido = true;
    

    if (this.floatingNombres.nativeElement.value.length < 5) {
      this.floatingNombres.nativeElement.classList.add('is-invalid');
      return false;
    } else {
      this.floatingNombres.nativeElement.classList.remove('is-invalid'); 
    } 

    if (this.floatingTelefono.nativeElement.value.length < 5) {
      this.floatingTelefono.nativeElement.classList.add('is-invalid');
      return false;
    } else {
      this.floatingTelefono.nativeElement.classList.remove('is-invalid'); 
    }

    if (this.floatingDireccion.nativeElement.value.length < 5) {
      this.floatingDireccion.nativeElement.classList.add('is-invalid');
      return false;
    } else {
      this.floatingDireccion.nativeElement.classList.remove('is-invalid'); 
    }

    if (this.floatingCuidad.nativeElement.value.length < 5) {
      this.floatingCuidad.nativeElement.classList.add('is-invalid');
      return false;
    } else {
      this.floatingCuidad.nativeElement.classList.remove('is-invalid'); 
    }

    if (this.floatingBarrio.nativeElement.value.length < 5) {
      this.floatingBarrio.nativeElement.classList.add('is-invalid');
      return false;
    } else {
      this.floatingBarrio.nativeElement.classList.remove('is-invalid'); 
    }
 
    return formValido;
  }

  cadenaProductos(): string {
    let cadenaRetorno = "";
    for (let i = 0; i < this.productos.length; i++) {
      cadenaRetorno += this.productos[i].cantidadEnviada + '%20' + this.productos[i].refDescripcion.replace(/\s/g, '%20') + '%20' + this.productos[i].color + '%20Talla%20' + this.productos[i].talla + '%20...' + '%20Valor%20unidad:%20$' + this.productos[i].vlrUnidad + '%20%0A'
    }
    return cadenaRetorno;
  }

  cadenaMetodoEntrega(idEntrega: number): string {
    let cadenaRetorno = "";
    cadenaRetorno = idEntrega == 1 ? this.retiroTienda() : this.domicilio();
    return cadenaRetorno;
  }
  retiroTienda(): string {
    let cadena = this.CadenaTotalPago();
    return cadena;
  }

  domicilio(): string {
    let cadena = this.costoDomicilio() + this.CadenaTotalPago() + this.cadenaDatosDomicilio();
    this.totalFactura -= this.valorDomicilio;
    return cadena;
  }
  costoDomicilio(): string {

    let costoDomicilio = 'domicilio%20...%20Valor%20unidad:%20$' + this.valorDomicilio + '%0A';
    this.totalFactura += this.valorDomicilio;
    return costoDomicilio;
  }

  CadenaTotalPago() {
    let cadenaTotal = "Total%20a%20pagar%20=%20%20$" + this.totalFactura + "%20%0A";
    return cadenaTotal;
  }

  cadenaDatosDomicilio(): string {
    let cadena = "";
    cadena = '-----------------------------------------------------------%0AMis%20datos%20son:%20%F0%9F%93%9D%F0%9F%93%9D%0A' + 'Nombres:' + '%20' + this.floatingNombres.nativeElement.value.replace(/\s/g, '%20') + '%0ATelefono:' + '%20' + this.floatingTelefono.nativeElement.value.replace(/\s/g, '%20') + '%0ACiudad:' + '%20' + this.floatingCuidad.nativeElement.value.replace(/\s/g, '%20') + '%0ADireccion:' + '%20' + this.floatingDireccion.nativeElement.value.replace(/\s/g, '%20') + '%0ABarrio%20-%20Localidad:' + '%20' + this.floatingBarrio.nativeElement.value.replace(/\s/g, '%20%0A');
    return cadena;
  }



}
