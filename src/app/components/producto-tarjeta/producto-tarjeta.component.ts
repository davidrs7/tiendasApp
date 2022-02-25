import { Component, ElementRef, OnInit, ViewChild, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TiendaService } from 'src/app/Services/tienda.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-producto-tarjeta',
  templateUrl: './producto-tarjeta.component.html',
  styleUrls: ['./producto-tarjeta.component.css']
})
export class ProductoTarjetaComponent implements OnInit {

  index: number;
  producto: any[] = [];
  productoSeleccionado: any[] = [];
  carritoActual: any[] = [];
  carrito: {} = {};
  productoAdicional: any[] = [];

  @ViewChild("inputZip") inputZip: ElementRef;
  tallaSelected: boolean = false;

  constructor(private _tiendaService: TiendaService
    , private router: Router
    , private activateRoute: ActivatedRoute) {
    this.activateRoute.params.subscribe(params => {
      this.producto = this._tiendaService.getProductoxIdColoryReferencia(params['refCodigo'], params['colorCodigo']);
    });

  }

  ngOnInit(): void {
  }

  asignarTalla(i: number) {
    //console.log(this.producto[i]);
    this.index = i;
    this.tallaSelected = true;
  }

  validarDisponibilidad() {
    //console.log('abc-' + this.producto[0].cantidad);
    if (this.inputZip.nativeElement.value == 0) { 
      Swal.fire({
        title: 'Error!',
        text: 'Por favor ingresa una cantidad',
        icon: 'error',
        confirmButtonText: 'Regresar'
      });
    } else if (this.inputZip.nativeElement.value < 0) {
      Swal.fire({
        title: 'Error!',
        text: 'La cantidad que ingresaste no es valida',
        icon: 'error',
        confirmButtonText: 'Regresar'
      });
    } else if (this.inputZip.nativeElement.value > this.producto[0].cantidad) {
      Swal.fire({
        title: 'Error!',
        text: 'No contamos con esa cantidad en nuesto inventario',
        icon: 'error',
        confirmButtonText: 'Regresar'
      });
    } else if (this.tallaSelected) {
      this.addCarrito();
    }
    else {
      Swal.fire({
        title: 'Error!',
        text: 'Por favor selecciona una talla',
        icon: 'error',
        confirmButtonText: 'Regresar'
      });
    }
  }

  addCarrito() {

    this.carritoActual = JSON.parse(localStorage.getItem('productoCarrito')) != null ? JSON.parse(localStorage.getItem('productoCarrito')) : this.carritoActual;

    this.carrito =
    {
      refCodigo: this.producto[this.index].refCodigo,
      refDescripcion: this.producto[this.index].refDescripcion,
      codColor: this.producto[this.index].codColor,
      color: this.producto[this.index].color,
      img: this.producto[this.index].img,
      tallaCodigo: this.producto[this.index].tallaCodigo,
      talla: this.producto[this.index].talla,
      cantidadEnviada: this.inputZip.nativeElement.value,
      cantidadDisponible: this.producto[this.index].cantidad,
      vlrUnidad: this.producto[this.index].vlrUnidad,
      vlrTotal: this.producto[this.index].vlrUnidad * this.inputZip.nativeElement.value,
      DescProducto: this.producto[this.index].DescProducto
    };

    let validaProducto = this.carritoActual.filter(producto => 
                                                   producto.refCodigo == this.carrito['refCodigo'] 
                                                   && producto.codColor == this.carrito['codColor'] 
                                                   && producto.tallaCodigo == this.carrito['tallaCodigo']);

    if (validaProducto.length == 0) {
      this.carritoActual.push(this.carrito);
      Swal.fire({
        title: 'Bien hecho!',
        text: 'Producto agregado con exito',
        icon: 'success',
        confirmButtonText: 'Seguir comprando'
      });
    } else {
      Swal.fire({
        title: 'Información!',
        text: 'Este producto ya existe en el carrito',
        icon: 'info',
        confirmButtonText: 'Regresar'
      });
    }

    localStorage.setItem('productoCarrito', JSON.stringify(this.carritoActual));
    localStorage.setItem('notificacion',  this.carritoActual.length.toString());
  }

}
