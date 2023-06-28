using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using luta_de_pokemons_antigo;

namespace luta_de_pokemons_antigo
{
    public class Menu : Pokemons
    {

        public string? pokemonEscolhido { get; set; }
        public string resp { get; set; }
        public string resp2 { get; set; }
        Pokemons pk = new Pokemons();


        public Menu()
        {

            Console.WriteLine($"Olá, informe seu nome:");
            pk.nomeJogador = Console.ReadLine();

            do
            {

                Console.WriteLine(@$"
            Informe qual Pokemon deseja utilizar:

            [1] - Hypno
            [2] - Psyduck
            [3] - Espeon");

                resp = Console.ReadLine()!;
                while (resp != "1" && resp != "2" && resp != "3")
                {
                    Console.WriteLine($"\nDados inválidos.\n");
                    Console.WriteLine(@$"
            Informe qual Pokemon deseja utilizar:
                    
            [1] - Hypno
            [2] - Psyduck
            [3] - Espeon");

                    resp = Console.ReadLine()!;

                }

                switch (resp)
                {
                    case "1":

                        pk.vidaJogador = 300;


                        Console.WriteLine(@$"
                Seu Pokemon: {pk.HypnoNome}

                Status:
                Vida total: {pk.vidaJogador} HP
                Cura por round: {pk.hypnoCura} HP
                Dano por acerto: {pk.hypnoAtk} N
                ");
                        break;

                    case "2":

                        pk.vidaJogador = 150;

                        Console.WriteLine(@$"
                Seu Pokemon: {pk.PsyduckNome}

                Status:
                Vida total: {pk.vidaJogador} HP
                Cura por round: {pk.psyduckCura} HP
                Dano por acerto: {pk.psyduckAtk} N
                ");
                        break;



                    case "3":

                        pk.vidaJogador = 200;

                        Console.WriteLine(@$"
                Seu Pokemon: {pk.EspeonNome}

                Status:
                Vida total: {pk.vidaJogador} HP
                Cura por round: {pk.espeonCura} HP
                Dano por acerto: {pk.espeonAtk} N
                ");
                        break;

                    default:
                        Console.WriteLine($"Opção inválida.");
                        break;
                }

                Console.WriteLine($"Estás certo de sua escolha ? S/N");
                resp2 = Console.ReadLine()!.ToUpper();

                while (resp2 != "S" && resp2 != "N")
                {
                    Console.WriteLine($"Dados inválidos.");

                    Console.WriteLine($"Estás certo de sua escolha ? S/N\n");
                    resp2 = Console.ReadLine()!.ToUpper();

                }

            } while (resp2 == "N");


            Console.WriteLine($"\nBem-vindo à arena!\n");


            Console.WriteLine(@$"
            Seu oponente é: {pk.SnorlaxNome}

            Status:
            Vida: {pk.snorlaxVida} HP
            Dano por round: {pk.snorlaxAtk} N");


            Console.WriteLine($"\n{pokemonEscolhido}, eu escolho você!\n");

            Console.WriteLine($"Você começa!");

            // Console.WriteLine($"Você possui {} de vida");






        }
    }
}