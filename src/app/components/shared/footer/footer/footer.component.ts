import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  facebook(){window.open('https://www.facebook.com/busosblinders/')}
  instagram(){window.open('https://www.instagram.com/busos_blinders/')}
  github(){window.open('https://github.com/davidrs7')}
  linkenId(){window.open('https://www.linkedin.com/in/davidrz7/')}

}
