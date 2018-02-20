import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { movimentoComponent } from './movimento.component';
import { MovimentoListaComponent } from './movimento-lista/movimento-lista.component';
import { MovimentoDetalheComponent } from './movimento-detalhe/movimento-detalhe.component';
import { MovimentoRoutingModule } from './movimento-routing.module';
import { ComponenteModule } from '../../componente.module';


@NgModule({
  declarations: [
    movimentoComponent,
    MovimentoListaComponent,
    MovimentoDetalheComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MovimentoRoutingModule,
    ComponenteModule
  ],
  providers: []
})
export class MovimentoModule { }
