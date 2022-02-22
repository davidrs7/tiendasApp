import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../../Services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  numProductos:number;
  constructor(private _heroesService:HeroesService,
    private router: Router) {
        
 
     }

  ngOnInit(): void {
    this.validaNotificacion();
  }


  validaNotificacion(){ 
    let numprod= localStorage.getItem('notificacion');
    this.numProductos = numprod == null ? 0 : parseInt(numprod);
  }

  buscarHeroe (Texto:string){
        console.log(Texto)
        this.router.navigate(['/buscar-heroe',Texto])
  }

}
