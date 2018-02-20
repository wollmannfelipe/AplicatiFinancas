import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { NavegacaoService } from './shared/service/navegacao.service';
import { AppRoutingModule } from './app-routing.module';
import { ContaModule } from './rotinas/conta/conta.module';
import { CategoriaModule } from './rotinas/categoria/categoria.module';
import { TipoMovimentoModule } from './rotinas/tipo-Movimento/tipo-Movimento.module';
import { MovimentoModule } from './rotinas/movimento/movimento.module';
import { ComponenteModule } from './componente.module';
import { CategoriaService } from './shared/service/categoria.service';
import { HttpModule } from '@angular/http/';
import { GlobalService } from './shared/service/global-variaveis.service';
import { LoginService } from './shared/service/login.service';
import { MesAnoService } from './shared/service/mes-ano.service';
import { TipoMovimentoService } from './shared/service/tipo-movimento.service';
import { MovimentoService } from './shared/service/movimento.service';
import { ContaService } from './shared/service/conta.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ContaModule,
    CategoriaModule,
    TipoMovimentoModule,
    MovimentoModule,
    ComponenteModule,
    HttpModule
  ],
  providers: [
    NavegacaoService,
    CategoriaService,
    GlobalService,
    LoginService,
    MesAnoService,
    TipoMovimentoService,
    MovimentoService,
    ContaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
