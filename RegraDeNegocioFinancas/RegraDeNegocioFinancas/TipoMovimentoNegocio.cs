using BancoDeDadosFinancas;
using System;
using System.Collections.Generic;
using System.Linq;

namespace RegraDeNegocioFinancas
{
    public class TipoMovimentoNegocio
    {
        public ADSResposta Salvar(TipoMovimentoView c)
        {
            var resposta = new ADSResposta();
            using (var db = DBCore.NovaInstanciaDoBanco())
            {
                using (var transacao = db.Database.BeginTransaction())
                {
                    try
                    {
                        TipoMovimento novo = null;

                        if (!c.Codigo.Equals("0"))
                        {
                            var id = int.Parse(c.Codigo);
                            novo = db.TipoMovimentos.Where(w => w.Codigo.Equals(id)).FirstOrDefault();
                            novo.Descricao     = c.Descricao;
                            novo.CreditoDebito = c.CreditoDebito;
                        }
                        else
                        {
                            novo = db.TipoMovimentos.Create();
                            novo.Descricao     = c.Descricao;
                            novo.CreditoDebito = c.CreditoDebito;

                            db.TipoMovimentos.Add(novo);
                        }

                        db.SaveChanges();
                        c.Codigo = novo.Codigo.ToString();
                        resposta.Sucesso = true;
                        resposta.Objeto = c;
                        transacao.Commit();
                    }
                    catch (Exception ex)
                    {
                        transacao.Rollback();
                        resposta.Sucesso = false;
                        resposta.Mensagem = ex.Message;
                    }
                }
            }
            return resposta;
        }

        public ADSResposta Excluir(TipoMovimentoView c)
        {
            var resposta = new ADSResposta();
            using (var db = DBCore.NovaInstanciaDoBanco())
            {
                using (var transacao = db.Database.BeginTransaction())
                {
                    try
                    {
                        var id = int.Parse(c.Codigo);
                        var tipomovimento = db.TipoMovimentos.Where(w => w.Codigo.Equals(id)).FirstOrDefault();

                        if (tipomovimento == null)
                        {
                            resposta.Sucesso = false;
                            resposta.Objeto = c;
                            resposta.Mensagem = "Tipo de movimento não encontrada.";
                        }
                        else
                        {
                            db.TipoMovimentos.Remove(tipomovimento);
                            db.SaveChanges();

                            resposta.Sucesso = true;
                            resposta.Objeto = c;
                            transacao.Commit();
                        }

                    }
                    catch (Exception ex)
                    {
                        transacao.Rollback();
                        resposta.Sucesso = false;
                        resposta.Mensagem = ex.Message;
                    }
                }
            }
            return resposta;
        }

        
        public TipoMovimentoView ConverteParaView(TipoMovimento c)
        {
            if (c == null) return null;

            return new TipoMovimentoView
            {
                Codigo = c.Codigo.ToString(),
                Descricao = c.Descricao
            };
        }

        public List<TipoMovimentoView> PegaTodas()
        {
            var tipomovimento = DBCore.InstanciaDoBanco().TipoMovimentos.ToList();

            var resposta = new List<TipoMovimentoView>();
            foreach (var c in tipomovimento)
            {
                resposta.Add(ConverteParaView(c));
            }

            return resposta;
        }

        public TipoMovimentoView PegaPorCodigo(int id)
        {
            var tipomovimento = DBCore.InstanciaDoBanco().TipoMovimentos
                .Where(w => w.Codigo.Equals(id))
                .FirstOrDefault();

            TipoMovimentoView resposta = null;

            if (tipomovimento != null)
            {
                resposta = ConverteParaView(tipomovimento);
            }

            return resposta;
        }
    }
}