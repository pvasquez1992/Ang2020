import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  mostrar = true;

  frase : any = {
    mensaje : 'Siganme los buenos.',
    autor: 'Chapupin Colorado'
  };

  personajes : string[] = ['Chapulin Colorado','Virolo','Bruja 71'];

  constructor() { }

  ngOnInit(): void {
  }

}
