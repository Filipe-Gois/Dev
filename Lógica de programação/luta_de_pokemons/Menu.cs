using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using luta_de_pokemons;

namespace luta_de_pokemons
{
    public class Menu
    {
        public string? pokemonEscolhido { get; set; }
        public string resp { get; set; }
        public string resp2 { get; set; }
        public string resp3 { get; set; }
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

                        pk.nomePokemon = "Hypno";
                        pk.jogadorVida = 300;
                        pk.jogadorVidaMaxima = 300;
                        pk.jogadorCura = 25;
                        pk.jogadorAtk = 50;




                        Console.WriteLine(@$"
                Seu Pokemon: {pk.nomePokemon}

                Status:
                Vida total: {pk.jogadorVida} HP
                Cura por round: {pk.jogadorCura} HP
                Dano por acerto: {pk.jogadorAtk} N
                ");
                        break;

                    case "2":

                        pk.nomePokemon = "Psyduck";
                        pk.jogadorVida = 150;
                        pk.jogadorVidaMaxima = 150;
                        pk.jogadorCura = 45;
                        pk.jogadorAtk = 30;


                        Console.WriteLine(@$"
                Seu Pokemon: {pk.nomePokemon}

                Status:
                Vida total: {pk.jogadorVida} HP
                Cura por round: {pk.jogadorCura} HP
                Dano por acerto: {pk.jogadorAtk} N
                ");
                        break;


                    case "3":

                        pk.nomePokemon = "Espeon";
                        pk.jogadorVida = 200;
                        pk.jogadorVidaMaxima = 200;
                        pk.jogadorCura = 20;
                        pk.jogadorAtk = 40;


                        Console.WriteLine(@$"
                Seu Pokemon: {pk.nomePokemon}

                Status:
                Vida total: {pk.jogadorVida} HP
                Cura por round: {pk.jogadorCura} HP
                Dano por acerto: {pk.jogadorAtk} N
                ");
                        break;


                    default:
                        Console.WriteLine($"Opção inválida.");
                        break;
                }


                Console.WriteLine($"\nEstás certo de sua escolha ? S/N");
                resp2 = Console.ReadLine()!.ToUpper();

                while (resp2 != "S" && resp2 != "N")
                {
                    Console.WriteLine($"\nDados inválidos.");

                    Console.WriteLine($"\nEstás certo de sua escolha ? S/N");
                    resp2 = Console.ReadLine()!.ToUpper();

                }

            } while (resp2 == "N");


            Console.WriteLine($"\nBem-vindo à arena!\n");


            Console.WriteLine(@$"
            Seu oponente é: {pk.vilaoNome}

            Status:
            Vida: {pk.vilaoVida} HP
            Dano por round: {pk.vilaoAtk} N");

            pokemonEscolhido = pk.nomePokemon;


            Console.WriteLine($"\n{pokemonEscolhido}, eu escolho você!\n");

            Console.WriteLine($"Você começa!");

            do
            {


                Console.WriteLine($"\nVocê possui {pk.jogadorVida} de vida\n");

                Console.WriteLine(@$"
            Adversário: {pk.vilaoNome}:

            Status:
            Vida: {pk.vilaoVida} HP
            Dano por round: {pk.vilaoAtk} N");

            Console.WriteLine();
            

                Console.WriteLine(@$"O que deseja fazer neste turno ?
            
            [1] - Atacar
            [2] - Curar");

                resp3 = Console.ReadLine()!;


                switch (resp3)
                {
                    case "1":

                        pk.jogadorAtacar();
                        pk.vilaoVida = pk.vilaoVidaRestante;

                        Console.WriteLine($"\nVocê atacou {pk.vilaoNome} e causou {pk.jogadorAtk} de dano.\n");
                        Console.WriteLine(@$"
            {pk.vilaoNome}:

            Status:
            Vida: {pk.vilaoVidaRestante} HP
            Dano por round: {pk.vilaoAtk} N");

                        break;

                    case "2":

                        Console.WriteLine(pk.jogadorVida >= pk.jogadorVidaMaxima ? $"Aff, infelizmente você está com sobrecura. Sua vida já atingiu o limite de {pk.jogadorVida} HP." : $"Você curou {pk.jogadorCura} e agora possui {pk.Curar()} HP.");

                        break;

                    default:
                        Console.WriteLine($"Você perdeu seu turno por não saber escolher :<");
                        break;
                }

                if (pk.jogadorVida <= 0)
                {
                    pk.jogadorVida = 0;
                }

                if (pk.vilaoVida <= 0)
                {
                    pk.vilaoVida = 0;
                }


            } while (pk.jogadorVida > 0 && pk.vilaoVida > 0);
        }
    }
}