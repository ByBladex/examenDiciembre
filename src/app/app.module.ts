import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { DetallesComponent } from './components/detalles/detalles.component';
import { CustomPipePipe } from './custom-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    FormularioComponent,
    DetallesComponent,
    CustomPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
