import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriaComponent } from './categoria.component';
import { CategoriaDetalheComponent } from './categoria-detalhe/categoria-detalhe.component';
import { CategoriaListaComponent } from './categoria-lista/categoria-lista.component';
import { Erro404Component } from '../../erro404/erro404.component';
import { CategoriaDetalheResolveService } from './categoria-detalhe/categoria-detalhe-resolve.service';
import { CanDeactivateGuardService } from '../../shared/service/can-deactivate-guard.service';

const router: Routes = [
    {
        path: '',
        component: CategoriaComponent,
        children: [
            {
                path: 'incluir',
                component: CategoriaDetalheComponent,
                canDeactivate: [ CanDeactivateGuardService]
            },
            {
                path: 'editar/:id',
                component: CategoriaDetalheComponent,
                resolve: {
                    categoria: CategoriaDetalheResolveService
                },
                canDeactivate: [ CanDeactivateGuardService]
            },
            {
                path: '',
                component: CategoriaListaComponent
            }
        ]
    },
    {
        path: '**',
        component: Erro404Component
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(router)
    ],
    exports: [
        RouterModule
    ],
    providers: [
        CategoriaDetalheResolveService,
        CanDeactivateGuardService
    ]
})
export class CategoriaRoutingModule {}
