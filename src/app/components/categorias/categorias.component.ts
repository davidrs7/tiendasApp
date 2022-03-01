import { Component, OnInit } from '@angular/core';
import {  TiendaService } from '../../Services/tienda.service';
import { ActivatedRoute, Router } from '@angular/router';
import { referencias } from 'src/app/Services/interfaces/referencias';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
    
  referencias: referencias[] = [];

  constructor(private _tiendaService:TiendaService
            ,private router: Router) { }
  
  ngOnInit(): void {
    this.referencias = this._tiendaService.getReferencias(); 
  }

  verProductos(index:number)
  {
    let refCodigo = this.referencias[index].refCodigo;
    this.router.navigate(['/productos',refCodigo])
  }

}
