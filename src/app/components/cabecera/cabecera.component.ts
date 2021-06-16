import { LibrosService } from './../../services/libros.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  constructor(private servicioLibro: LibrosService) { }

  ngOnInit(): void {
  }

  mostrar(){
    this.servicioLibro.mostrar();
  }

}
