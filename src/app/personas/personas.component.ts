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
    titulo = '';
    personacrear(){
      this.mensaje = 'persona añadida'
    }
    modificarTitulo(event: Event){
      this.titulo = (<HTMLInputElement>event.target).value;
    }

  }


