import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TiendaService } from 'src/app/Services/tienda.service';

@Component({
  selector: 'app-producto-tarjeta',
  templateUrl: './producto-tarjeta.component.html',
  styleUrls: ['./producto-tarjeta.component.css']
})
export class ProductoTarjetaComponent implements OnInit {

  producto: any[] = [];
   
  
  
  constructor(private _tiendaService: TiendaService
             ,private router:Router
             ,private activateRoute: ActivatedRoute) 
            {
              this.activateRoute.params.subscribe(params => 
              {
                this.producto = this._tiendaService.getProductoxIdColoryReferencia(params['RefCodigo'],params['colorCodigo']);
              })    
            }

  ngOnInit(): void {
  }

}
