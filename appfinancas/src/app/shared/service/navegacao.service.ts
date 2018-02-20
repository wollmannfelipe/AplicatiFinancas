import { Injectable } from '@angular/core';

import { Navegacao } from '../model/navegacao.model';

@Injectable()
export class NavegacaoService {
    public obtemNavegacao(): Navegacao[] {
        const retorno = new Array<Navegacao>();

        let item = new Navegacao();
        item.Icone = 'dashboard';
        item.Endereco = '/dashboard';
        item.Titulo = 'Dashboard';

        retorno.push(item);

        item = new Navegacao();
        item.Icone = 'account_balance';
        item.Endereco = '/conta';
        item.Titulo = 'Conta';

        retorno.push(item);

        item = new Navegacao();
        item.Icone = 'bookmark';
        item.Endereco = '/categoria';
        item.Titulo = 'Categoria';

        retorno.push(item);

        item = new Navegacao();
        item.Icone = 'compare_arrows';
        item.Endereco = '/tipomovimento';
        item.Titulo = 'Tipo movimento';

        retorno.push(item);

        item = new Navegacao();
        item.Icone = 'list';
        item.Endereco = '/movimento';
        item.Titulo = 'Movimento';

        retorno.push(item);
        return retorno;
    }
}