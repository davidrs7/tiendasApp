import { Component, OnInit } from '@angular/core';
import { referencias, TiendaService } from '../../Services/tienda.service';
import { ActivatedRoute, Router } from '@angular/router';

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
