import { Component } from '@angular/core';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent  {

    texto = 'Listado de personas';
    mensaje = 'persona no añadida'
    deshabilitar = false;
    personacrear(){
      this.mensaje = 'persona añadida'
    }

  }


