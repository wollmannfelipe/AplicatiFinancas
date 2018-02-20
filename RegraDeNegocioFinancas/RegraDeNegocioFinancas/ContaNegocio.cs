using BancoDeDadosFinancas;
using System;
using System.Collections.Generic;
using System.Linq;

namespace RegraDeNegocioFinancas
{
    public class ContaNegocio
    {
        public ADSResposta Salvar(ContaView c)
        {
            var resposta = new ADSResposta();
            using (var db = DBCore.NovaInstanciaDoBanco())
            {
                using (var transacao = db.Database.BeginTransaction())
                {
                    try
                    {
                        Conta novo = null;

                        if (!c.Codigo.Equals("0"))
                        {
                            var id = int.Parse(c.Codigo);
                            novo = db.Contas.Where(w => w.Codigo.Equals(id)).FirstOrDefault();
                            novo.Descricao = c.Descricao;
                        }
                        else
                        {
                            novo = db.Contas.Create();
                            novo.Descricao = c.Descricao;

                            db.Contas.Add(novo);
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

        public ADSResposta Excluir(ContaView c)
        {
            var resposta = new ADSResposta();
            using (var db = DBCore.NovaInstanciaDoBanco())
            {
                using (var transacao = db.Database.BeginTransaction())
                {
                    try
                    {
                        var id = int.Parse(c.Codigo);
                        var conta = db.Contas.Where(w => w.Codigo.Equals(id)).FirstOrDefault();

                        if (conta == null)
                        {
                            resposta.Sucesso = false;
                            resposta.Objeto = c;
                            resposta.Mensagem = "Conta não encontrada.";
                        }
                        else
                        {
                            db.Contas.Remove(conta);
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

        public ContaView ConverteParaView(Conta c)
        {
            if (c == null) return null;

            return new ContaView
            {
                Codigo = c.Codigo.ToString(),
                Descricao = c.Descricao
            };
        }

        public List<ContaView> PegaTodas()
        {
            var contas = DBCore.InstanciaDoBanco().Contas.ToList();

            var resposta = new List<ContaView>();
            foreach (var c in contas)
            {
                resposta.Add(ConverteParaView(c));
            }

            return resposta;
        }

        public ContaView PegaPorCodigo(int id)
        {
            var conta = DBCore.InstanciaDoBanco().Contas
                .Where(w => w.Codigo.Equals(id))
                .FirstOrDefault();

            ContaView resposta = null;

            if (conta != null)
            {
                resposta = ConverteParaView(conta);
            }

            return resposta;
        }
    }
}