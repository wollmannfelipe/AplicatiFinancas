import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TipoMovimentoComponent } from './tipo-movimento.component';
import { TipoMovimentoListaComponent } from './tipo-movimento-lista/tipo-movimento-lista.component';
import { TipoMovimentoDetalheComponent } from './tipo-movimento-detalhe/tipo-movimento-detalhe.component';
import { TipoMovimentoRoutingModule } from './tipo-movimento-routing.module';
import { ComponenteModule } from '../../componente.module';


@NgModule({
  declarations: [
    TipoMovimentoComponent,
    TipoMovimentoListaComponent,
    TipoMovimentoDetalheComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TipoMovimentoRoutingModule,
    ComponenteModule
  ],
  providers: []
})
export class TipoMovimentoModule { }
