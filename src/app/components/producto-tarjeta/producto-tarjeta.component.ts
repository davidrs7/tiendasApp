import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TiendaService } from 'src/app/Services/tienda.service';

@Component({
  selector: 'app-producto-tarjeta',
  templateUrl: './producto-tarjeta.component.html',
  styleUrls: ['./producto-tarjeta.component.css']
})
export class ProductoTarjetaComponent implements OnInit {

  producto: any[] = [];
   
  @ViewChild("inputZip") inputZip: ElementRef;
  tallaSelected:boolean = false;
  
  constructor(private _tiendaService: TiendaService
             ,private router:Router
             ,private activateRoute: ActivatedRoute) 
            {
              this.activateRoute.params.subscribe(params => 
              {
                this.producto = this._tiendaService.getProductoxIdColoryReferencia(params['refCodigo'],params['colorCodigo']);
              })    
            }

  ngOnInit(): void {
  }

  asignarTalla(i:number)
  {
    console.log(this.producto[i]);
      console.log(this.inputZip.nativeElement.value);
      this.tallaSelected = true;
  }

  validarDisponibilidad(){
    console.log('abc-'  + this.producto[0].cantidad);
      if (this.inputZip.nativeElement.value == 0) {
        alert('Por favor ingrese la cantidad')
      }else  if (this.inputZip.nativeElement.value < 0) {
        alert('Cantidad ingresada no valida')
      }else  if (this.inputZip.nativeElement.value > this.producto[0].cantidad) {
        alert('No contamos con esta cantidad en nuestro inventario')
      }else if(this.tallaSelected){
        alert('Si existe, agregado al carro');
      }      
      else{
        alert('Por favor seleccione una talla')
      }
  }

}
