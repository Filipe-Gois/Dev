using Sistema_de_Biblioteca;

Livro livro = new Livro();


string escolha;

do
{
    Console.WriteLine();
    Console.WriteLine(@$"Bem-vindo, selecione a opção desejada:

[1] - Cadastrar livro
[2] - Pesquisar livro
[3] - Realizar empréstimo
[4] - Devolver livro
[5] - Listar livros
[0] - Sair");

    escolha = Console.ReadLine()!;
} while (escolha != "0");

switch (escolha)
{
    case "1":
        livro.Cadastrar(livro.titulo, livro.autor, livro.anoPublicacao, livro.numeroExemplares);
        break;

    case "2":
        livro.Pesquisar(livro.titulo, livro.autor, livro.anoPublicacao);
        break;

    case "3":
        livro.Emprestimo(livro.titulo);
        break;

    case "4":
        livro.Devolver();
        break;

    case "5":
        livro.ListarLivros();
        break;

    case "0":
        break;


    default:
        Console.WriteLine($"Valor inválido.");
        break;
}
