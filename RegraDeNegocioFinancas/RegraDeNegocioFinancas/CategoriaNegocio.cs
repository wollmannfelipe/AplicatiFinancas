using BancoDeDadosFinancas;
using System;
using System.Collections.Generic;
using System.Linq;

namespace RegraDeNegocioFinancas
{
    public class CategoriaNegocio
    {
        public ADSResposta Salvar(CategoriaView c)
        {
            var resposta = new ADSResposta();
            using (var db = DBCore.NovaInstanciaDoBanco())
            {
                using (var transacao = db.Database.BeginTransaction())
                {
                    try
                    {
                        Categoria novo = null;

                        if (!c.Codigo.Equals("0"))
                        {
                            var id = int.Parse(c.Codigo);
                            novo = db.Categorias.Where(w => w.Codigo.Equals(id)).FirstOrDefault();
                            novo.Descricao = c.Descricao;
                        }
                        else
                        {
                            novo = db.Categorias.Create();
                            novo.Descricao = c.Descricao;

                            db.Categorias.Add(novo);
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

        public ADSResposta Excluir(CategoriaView c)
        {
            var resposta = new ADSResposta();
            using (var db = DBCore.NovaInstanciaDoBanco())
            {
                using (var transacao = db.Database.BeginTransaction())
                {
                    try
                    {
                        var id = int.Parse(c.Codigo);
                        var categoria = db.Categorias.Where(w => w.Codigo.Equals(id)).FirstOrDefault();

                        if (categoria == null)
                        {
                            resposta.Sucesso  = false;
                            resposta.Objeto   = c;
                            resposta.Mensagem = "Categoria não encontrada.";
                        }
                        else
                        {
                            db.Categorias.Remove(categoria);
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

        public CategoriaView ConverteParaView(Categoria c)
        {
            if (c == null) return null;

            return new CategoriaView
            {
                Codigo = c.Codigo.ToString(),
                Descricao = c.Descricao
            };
        }

        public List<CategoriaView> PegaTodas()
        {
            var categoria = DBCore.InstanciaDoBanco().Categorias.ToList();

            var resposta = new List<CategoriaView>();
            foreach (var c in categoria)
            {
                resposta.Add(ConverteParaView(c));
            }

            return resposta;
        }

        public CategoriaView PegaPorCodigo(int id)
        {
            var categoria = DBCore.InstanciaDoBanco().Categorias
                .Where(w => w.Codigo.Equals(id))
                .FirstOrDefault();
            
            CategoriaView resposta = null;

            if (categoria != null)
            {
                resposta = ConverteParaView(categoria);
            }

            return resposta;
        }
    }
}
