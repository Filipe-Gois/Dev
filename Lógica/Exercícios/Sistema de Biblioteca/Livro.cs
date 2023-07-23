using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Sistema_de_Biblioteca
{
    public class Livro
    {
        public string? titulo { get; set; }
        public string? autor { get; set; }
        public string? anoPublicacao { get; set; }
        public int numeroExemplares { get; set; }
        public List<Livro>? livros { get; set; }
        public void Cadastrar(string Titulo, string Autor, string AnoPublicacao, int NumeroExemplares)
        {
            titulo = Titulo;
            autor = Autor;
            anoPublicacao = AnoPublicacao;
            numeroExemplares = NumeroExemplares;

            Console.WriteLine($"Informe o título do livro:");
            Titulo = Console.ReadLine()!;

            Console.WriteLine($"Informe o autor do livro:");
            Autor = Console.ReadLine()!;

            Console.WriteLine($"Informe o ano de publicação do livro:");
            AnoPublicacao = Console.ReadLine()!;

            Console.WriteLine($"Informe o título do livro:");
            NumeroExemplares = int.Parse(Console.ReadLine()!);

        }
        public void Pesquisar(string Titulo, string Autor, string AnoPublicacao)
        {
            Titulo = titulo;
            Autor = autor;
            AnoPublicacao = anoPublicacao;


        }

        public void Emprestimo(string Titulo)
        {
            Titulo = titulo;
        }

        public void Devolver()
        {

        }

        public void ListarLivros()
        {
            
        }
    }
}