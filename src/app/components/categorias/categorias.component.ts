import { Component, OnInit } from '@angular/core';
import { referencias, TiendaService } from '../../Services/tienda.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
    
  referencias: referencias[] = [];

  constructor(private _tiendaService:TiendaService,private router: Router) { }
  
  ngOnInit(): void {
    this.referencias = this._tiendaService.getReferencias();
    console.log(this.referencias);
  }

}
