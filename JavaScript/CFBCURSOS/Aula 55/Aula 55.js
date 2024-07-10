//coleção SET

//nao permite valores duplicados dentro dela

//dá pra adicionar elementos no proprio construtor
let musicas = new Set(["Judas", "fefe"]);

musicas.add("musica legal");
musicas.add("musica 1");
musicas.add("musica 1");

musicas.delete("Judas");

//limpa todo o array SET
musicas.clear();
console.log(musicas);
