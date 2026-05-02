import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  standalone: true,
  templateUrl: './perfil.html',
  styleUrls: ['./perfil.css']
})
export class Perfil {

  nombre: string = "Paula";
  profesion: string = "Desarrolladora";
  disponible: boolean = true;

  likes: number = 0;

  mostrarHabilidades: boolean = false;

  habilidades: string[] = ["Angular", "TypeScript", "CSS"];

  alternarHabilidades() {
    this.mostrarHabilidades = !this.mostrarHabilidades;
  }

  darLike() {
    this.likes++;
  }

  cambiarEstado() {
    this.disponible = !this.disponible;
  }
}