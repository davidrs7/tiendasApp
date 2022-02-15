import { Component, ElementRef, OnInit, ViewChild, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TiendaService } from 'src/app/Services/tienda.service';

@Component({
  selector: 'app-producto-tarjeta',
  templateUrl: './producto-tarjeta.component.html',
  styleUrls: ['./producto-tarjeta.component.css']
})
export class ProductoTarjetaComponent implements OnInit {

  index: number;
  producto: any[] = [];
  productoSeleccionado: any[] = [] ;
  carrito: any[] =  [
    {
      refCodigo: 0,
      refDescripcion: '',
      codColor: 1,
      color: '',
      img: '',
      tallaCodigo: 0,
      talla: '',
      cantidadEnviada: 0,
      vlrUnidad: 0,
      vlrTotal: 0,
      DescProducto: ''
    }];
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
      alert('Por favor ingrese la cantidad')
    } else if (this.inputZip.nativeElement.value < 0) {
      alert('Cantidad ingresada no valida')
    } else if (this.inputZip.nativeElement.value > this.producto[0].cantidad) {
      alert('No contamos con esta cantidad en nuestro inventario')
    } else if (this.tallaSelected) {
      this.addCarrito();
    }
    else {
      alert('Por favor seleccione una talla')
    }
  }

  addCarrito()
  {  
    //console.log(this.producto[this.index]);
    this.carrito =
    [
      {
      refCodigo: this.producto[this.index].refCodigo,
      refDescripcion: this.producto[this.index].refDescripcion,
      codColor: this.producto[this.index].codColor,
      color: this.producto[this.index].color,
      img: this.producto[this.index].img,
      tallaCodigo: this.producto[this.index].tallaCodigo,
      talla: this.producto[this.index].talla,
      cantidadEnviada: this.inputZip.nativeElement.value,
      vlrUnidad: this.producto[this.index].vlrUnidad,
      vlrTotal: this.producto[this.index].vlrUnidad * this.inputZip.nativeElement.value,
      DescProducto: this.producto[this.index].DescProducto
      }
    ]

    //console.log(this.carrito);
    localStorage.setItem('productoCarrito', JSON.stringify(this.carrito)); 
  }

}
