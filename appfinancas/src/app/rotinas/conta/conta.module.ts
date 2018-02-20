import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ContaDetalheComponent } from './conta-detalhe/conta-detalhe.component';
import { ContaListaComponent } from './conta-lista/conta-lista.component';
import { ContaComponent } from './conta.component';
import { ContaRoutingModule } from './conta-routing.module';
import { ComponenteModule } from '../../componente.module';


@NgModule({
  declarations: [
    ContaDetalheComponent,
    ContaListaComponent,
    ContaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ContaRoutingModule,
    ComponenteModule
  ],
  providers: []
})
export class ContaModule { }
