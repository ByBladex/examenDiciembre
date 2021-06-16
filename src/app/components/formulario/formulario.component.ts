import { LibrosService } from './../../services/libros.service';
import { Libro } from './../../libro';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  libro!: Libro
  formValidado: FormGroup

  constructor(private _builder: FormBuilder, public servicioLibro:LibrosService) {
    this.formValidado = this._builder.group({
      id: ['',Validators.required]
    })
   }

  ngOnInit(): void {
  }

  getLibro(){
      this.libro = this.servicioLibro.getLibro(this.formValidado.controls.id.value)[0];
  }

}
