import { Libro } from './../../libro';
import { LibrosService } from './../../services/libros.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  @Input('libro') libro!:Libro;

  constructor(public servicioLibro: LibrosService) { }

  ngOnInit(): void {
  }

}
