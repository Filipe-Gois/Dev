using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Sistema_de_Biblioteca
{
    public class Livro
    {
        // public string? titulo { get; set; }
        // public string? autor { get; set; }
        // public string? anoPublicacao { get; set; }
        public int numeroExemplares { get; set; }
        public string? titulo { get; set; }
        public string? autor { get; set; }
        public string? anoPublicacao { get; set; }
        public string? resp { get; set; }
        // public string? resp2 { get; set; }

        public List<Livro>? livroLista { get; set; } = new List<Livro>();


        public Livro()
        {

        }


        public Livro(string Titulo, string Autor, string AnoPublicacao, int NumeroExemplares)
        {
            this.titulo = Titulo;
            this.autor = Autor;
            this.anoPublicacao = AnoPublicacao;
            this.numeroExemplares = NumeroExemplares;
        }
        public void Cadastrar()
        {

            Console.WriteLine($"Informe o título do livro:");
            titulo = Console.ReadLine()!;

            Console.WriteLine($"Informe o autor do livro:");
            autor = Console.ReadLine()!;

            Console.WriteLine($"Informe o ano de publicação do livro:");
            anoPublicacao = Console.ReadLine()!;

            Console.WriteLine($"Informe o número de exemplares do livro:");
            numeroExemplares = int.Parse(Console.ReadLine()!);

            livroLista.Add(new(titulo, autor, anoPublicacao, numeroExemplares));

        }
        public void Pesquisar(string Titulo, string Autor, string AnoPublicacao)
        {

            do
            {
                Console.WriteLine(@$"Como deseja buscar o livro ?
            [1] - Título do livro
            [2] - Autor do livro
            [3] - Ano de publicação do livro");

                resp = Console.ReadLine()!;

            } while (resp != "1" && resp != "2" && resp != "3");

            string resp2;
            Livro livroBuscado;

            switch (resp)
            {
                case "1":
                    Console.WriteLine($"Informe o título do livro:");
                    resp2 = Console.ReadLine()!;

                    livroBuscado = livroLista?.Find(x => x.titulo == resp2)!;


                    if (livroBuscado != null)
                    {

                        foreach (var item in livroLista)
                        {
                            Console.WriteLine(@$"
                    Livro: {item.titulo}
                    Autor: {item.autor}
                    Ano de publicação: {item.anoPublicacao}
                    Número de exemplares: {item.numeroExemplares}");
                        }



                    }

                    else
                    {
                        Console.WriteLine($"Nenhum livro encontrado.");
                    }
                    break;

                case "2":
                    Console.WriteLine($"Informe o autor do livro:");
                    resp2 = Console.ReadLine()!;

                    livroBuscado = livroLista?.Find(x => x.autor == resp2)!;


                    if (livroBuscado != null)
                    {
                        foreach (var item in livroLista)
                        {
                            Console.WriteLine(@$"
                    Livro: {item.titulo}
                    Autor: {item.autor}
                    Ano de publicação: {item.anoPublicacao}
                    Número de exemplares: {item.numeroExemplares}");
                        }
                    }

                    else
                    {
                        Console.WriteLine($"Nenhum livro encontrado.");
                    }
                    break;

                case "3":
                    Console.WriteLine($"Informe o ano de publicação do livro:");
                    resp2 = Console.ReadLine()!;

                    livroBuscado = livroLista?.Find(x => x.anoPublicacao == resp2)!;


                    if (livroBuscado != null)
                    {
                        foreach (var item in livroLista)
                        {
                            Console.WriteLine(@$"
                    Livro: {item.titulo}
                    Autor: {item.autor}
                    Ano de publicação: {item.anoPublicacao}
                    Número de exemplares: {item.numeroExemplares}");
                        }
                    }

                    else
                    {
                        Console.WriteLine($"Nenhum livro encontrado.");
                    }
                    break;

                default:
                    Console.WriteLine($"Valor inválido.");
                    break;
            }




        }

        public void Emprestimo(string Titulo)
        {

        }

        public void Devolver()
        {

        }

        public void ListarLivros()
        {

            Console.WriteLine(@$"Livros cadastrados:");

        }
    }
}