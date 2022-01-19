import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../Services/heroes.service';


@Component({
  selector: 'app-buscar-heroe',
  templateUrl: './buscar-heroe.component.html' 
})
export class BuscarHeroeComponent implements OnInit {

 heroes: any[] = [] ;
 termino: string;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private _heroeService : HeroesService) {
      this.activatedRoute.params.subscribe( params => {
        this.termino = params['Texto'];
        this.heroes = this._heroeService.buscarHeroes(params['Texto'])
      } );
     }

  ngOnInit(): void {

  }

  verHeroe(idx: number) {
    console.log(idx)
    this.router.navigate(['/heroe',idx])
  }

}
