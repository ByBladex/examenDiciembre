import { Libro } from './../libro';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  hide: boolean = false;
  private libros: Libro[]
  
  constructor() {
    this.libros = [new Libro(1,"Don Quijote de la mancha","Cervantes", 750, "Muy buen libro, me encantó."), new Libro(2,"Kamasutra","Anon",150,"Este libro me hizo iorar y no de tristeza sino de dolor...")]
   }

  getLibros(){
    return this.libros;
  }

  mostrar(){
    this.hide = !this.hide;
  }

  getHide(){
    return this.hide;
  }

  getLibro(id:number){
    return this.libros.filter(x => x.id == id);
  }
}
