import { Component } from '@angular/core';

@Component({
  selector: 'app-mi-componente',
  templateUrl: './mi-componente.component.html',
  styleUrls: ['./mi-componente.component.css']
})
export class MiComponenteComponent  {
 
  comments: string[] = [];
  comentario: string="";
  mostrar(){
    this.comments.push(this.comentario);
    this.comentario="";
  }

  eliminarComentario(index: number) {
    this.comments.splice(index, 1);
  }
}

  

