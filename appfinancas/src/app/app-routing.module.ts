import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Erro404Component } from './erro404/erro404.component';
import { LoginComponent } from './login/login.component';
import { CanActivateGuardService } from './shared/service/can-activate-guard.service';

const router: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [CanActivateGuardService]
    },
    {
        path: 'conta',
        loadChildren: './rotinas/conta/conta.module#ContaModule'
    },
    {
        path: 'categoria',
        loadChildren: './rotinas/categoria/categoria.module#CategoriaModule'
    },
    {
        path: 'tipomovimento',
        loadChildren: './rotinas/tipo-Movimento/tipo-Movimento.module#TipoMovimentoModule'
    },
    {
        path: 'movimento',
        loadChildren: './rotinas/movimento/movimento.module#MovimentoModule'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '**',
        component: Erro404Component
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(router)
    ],
    exports: [
        RouterModule,
    ],
    providers: [
        CanActivateGuardService
    ]
})
export class AppRoutingModule {}
