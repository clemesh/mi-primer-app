import { Component } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html' ,
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent{
  nombre = 'Juan';
  apellido = 'Lopez';
  private edad : number =28;

  getEdad():number{
    return this.edad;
  }
}
