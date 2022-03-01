import { Component, ElementRef, Input, OnInit, SimpleChange, SimpleChanges, ViewChild } from '@angular/core'; 
import { ActivatedRoute, Router } from '@angular/router'; 
import { TiendaService } from 'src/app/Services/tienda.service'; 

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {  
  numProductos:string;
  constructor(private _tiendaService:TiendaService,
    private router: Router
    ,private activateRoute: ActivatedRoute) {   
     }

  ngOnInit(): void { 
  } 

  validaNotificacion(){  
    let numprod= localStorage.getItem('notificacion'); 
    this.numProductos = numprod == null ? '0' : numprod;    
  }

  buscarHeroe (Texto:string){
        console.log(Texto)
        this.router.navigate(['/buscar-heroe',Texto])
  }

  notifica(){
    let retorno;
    let numprod= localStorage.getItem('notificacion'); 
    this.numProductos = numprod == null ? '0' : numprod;   
    this.numProductos == '0' ? retorno = false : retorno = true
    return retorno;
  }

}
