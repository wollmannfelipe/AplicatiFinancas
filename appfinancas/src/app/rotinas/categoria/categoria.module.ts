import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CategoriaComponent } from './categoria.component';
import { CategoriaListaComponent } from './categoria-lista/categoria-lista.component';
import { CategoriaDetalheComponent } from './categoria-detalhe/categoria-detalhe.component';
import { CategoriaRoutingModule } from './categoria-routing.module';
import { ComponenteModule } from '../../componente.module';


@NgModule({
  declarations: [
    CategoriaComponent,
    CategoriaListaComponent,
    CategoriaDetalheComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CategoriaRoutingModule,
    ComponenteModule
  ],
  providers: []
})
export class CategoriaModule { }
