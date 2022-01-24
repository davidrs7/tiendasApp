import { Component, OnInit } from '@angular/core'; 
import { referencias, TiendaService } from '../../Services/tienda.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos: any[] = []; 
  refCodigo: number;
  constructor(private _tiendaService:TiendaService
              ,private router: Router
              ,private activatedRoute: ActivatedRoute) 
              { 
                this.activatedRoute.params.subscribe(params=>{  
                  this.refCodigo = params['refCodigo']
                  this.productos = this._tiendaService.getProductosXrefCod(params['refCodigo']);
                  //console.log(this.productos);
                })
              }

  ngOnInit(): void {
  }

 Regresar()
 {
  this.router.navigate(['/categorias'])
 }

 verProducto(index: number)
 { 
    let refCodigo = this.productos[index].refCodigo;
    let colorCodigo = this.productos[index].codColor; 
    this.router.navigate(['/producto',this.refCodigo,colorCodigo]);
 }  
}
