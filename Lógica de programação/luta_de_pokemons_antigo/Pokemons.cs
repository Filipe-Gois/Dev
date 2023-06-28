using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using luta_de_pokemons_antigo;

namespace luta_de_pokemons_antigo
{
    public class Pokemons
    {
        Menu menu = new Menu();
        public string? nomeJogador { get; set; }

        public int vidaJogador { get; set; }

        public string? HypnoNome { get; set; } = "Hypno";
        public int hypnoVida { get; set; } = 300;
        public int hypnoCura { get; set; } = 25;
        public int hypnoAtk { get; set; } = 50;
        public int hypnoVidaRestante { get; set; }


        public string? PsyduckNome { get; set; } = "Psyduck";
        public int psyduckVida { get; set; } = 150;
        public int psyduckCura { get; set; } = 45;
        public int psyduckAtk { get; set; } = 30;
        public int psyduckVidaRestante { get; set; }


        public string? EspeonNome { get; set; } = "Espeon";
        public int espeonVida { get; set; } = 200;
        public int espeonCura { get; set; } = 20;
        public int espeonAtk { get; set; } = 40;


        public string? SnorlaxNome { get; set; } = "Snorlax";
        public int snorlaxVida { get; set; } = 350;
        public int snorlaxCura { get; set; } = 60;
        public int snorlaxAtk { get; set; } = 30;


        public int snorlaxDano()
        {

            hypnoVidaRestante = hypnoVida - snorlaxAtk;
            // psyduckVida - snorlaxAtk = psyduckVidaRestante;
            return hypnoVidaRestante;
        }

        public string resposta()
        {

            if (menu.resp == "1")
            {
                menu.pokemonEscolhido = HypnoNome;
                
            }

            else if (menu.resp == "2")
            {
                menu.pokemonEscolhido = PsyduckNome;
                
            }

            else if (menu.resp == "3")
            {
                menu.pokemonEscolhido = EspeonNome;
                
            }

            return menu.pokemonEscolhido!;



        }








    }
}