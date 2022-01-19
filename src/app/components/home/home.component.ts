import { Component, OnInit } from '@angular/core';
import { HeroesComponent } from '../heroes/heroes.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
