using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace luta_de_pokemons
{
    public class Pokemons
    {
        public string? nomeJogador { get; set; }
        public string? nomePokemon { get; set; } = "";
        public int vida { get; set; } = 0;
        public int atk { get; set; } = 0;
        public int cura { get; set; } = 0;


        // public Pokemons Hypno()
        // {

        //     this.nomePokemon = "Hypno";
        //     this.vida = 300;
        //     this.atk = 50;
        //     return Hypno();
        // }

        // public Pokemons Psyduck()
        // {
        //     this.nomePokemon = "Psyduck";
        //     this.vida = 150;
        //     this.atk = 30;
        //     return Psyduck();
        // }

        // public Pokemons Espeon()
        // {
        //     this.nomePokemon = "Espeon";
        //     this.vida = 200;
        //     this.atk = 40;
        //     return Espeon();
        // }

        public Pokemons SnorlaxVilao()
        {
            this.nomePokemon = "Snorlax";
            this.vida = 350;
            this.atk = 60;
            return SnorlaxVilao();
        }


    }
}