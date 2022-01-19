import { Component, OnInit } from '@angular/core'; 
import { referencias, TiendaService } from '../../Services/tienda.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor(private _tiendaService:TiendaService,private router: Router) { }
  productos: any[];
  ngOnInit(): void {
    this.productos = this._tiendaService.getProductosXrefCod();
    console.log(this.productos);
  }

}
