using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using luta_de_pokemons;

namespace luta_de_pokemons
{
    public class Menu
    {
        public string resp { get; set; }
        public string resp2 { get; set; }

        Pokemons pk = new Pokemons();
        public string nomePokemon { get; set; }
        public int vida { get; set; }
        public int atk { get; set; }


        public Menu()
        {

            Console.WriteLine($"Olá, informe seu nome:");
            pk.nomeJogador = Console.ReadLine();

            do
            {

                Console.WriteLine(@$"Informe qual Pokemon deseja utilizar:
            [1] - Hypno
            [2] - Psyduck
            [3] - Espeon");

                resp = Console.ReadLine()!;
                while (resp != "1" && resp != "2" && resp != "3")
                {
                    Console.WriteLine($"Dados inválidos.");
                    Console.WriteLine(@$"Informe qual Pokemon deseja utilizar:
            [1] - Hypno
            [2] - Psyduck
            [3] - Espeon");

                    resp = Console.ReadLine()!;

                }

                switch (resp)
                {
                    case "1":
                        pk.nomePokemon = "Hypno";
                        pk.vida = 300;
                        pk.cura = 25;
                        pk.atk = 50;

                        Console.WriteLine(@$"Seu Pokemon: {pk.nomePokemon}
                Status:
                Vida total: {pk.vida} HP
                Cura por round: {pk.cura} HP
                Dano por acerto: {pk.atk}N
                ");
                        break;

                    case "2":

                        pk.nomePokemon = "Psyduck";
                        pk.vida = 150;
                        pk.cura = 45;
                        pk.atk = 30;

                        Console.WriteLine(@$"Seu Pokemon: {pk.nomePokemon}
                Status:
                Vida total: {pk.vida} HP
                Cura por round: {pk.cura} HP
                Dano por acerto: {pk.atk}N
                ");
                        break;

                    case "3":

                        pk.nomePokemon = "Espeon";
                        pk.vida = 200;
                        pk.cura = 20;
                        pk.atk = 40;

                        Console.WriteLine(@$"Seu Pokemon: {pk.nomePokemon}
                Status:
                Vida total: {pk.vida} HP
                Cura por round: {pk.cura} HP
                Dano por acerto: {pk.atk}N
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

                    Console.WriteLine($"Estás certo de sua escolha ? S/N");
                    resp2 = Console.ReadLine()!.ToUpper();

                }

            } while (resp2 == "N");

        }
    }
}