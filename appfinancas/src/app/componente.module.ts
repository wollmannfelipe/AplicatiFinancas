import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Erro404Component } from './erro404/erro404.component';
import { ContaModule } from './rotinas/conta/conta.module';
import { CategoriaModule } from './rotinas/categoria/categoria.module';
import { TipoMovimentoModule } from './rotinas/tipo-Movimento/tipo-Movimento.module';
import { MovimentoModule } from './rotinas/movimento/movimento.module';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    DashboardComponent,
    Erro404Component,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule
  ],
  providers: [ ]
})
export class ComponenteModule { }
