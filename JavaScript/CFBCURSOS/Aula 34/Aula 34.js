//addEventListener

const c1 = [...document.querySelectorAll("div#l1")][0];

const cursos = [...document.querySelectorAll(".teste")];

const mensagemAoClicar = () => {
  alert("Clicou!");
};

c1.addEventListener("click", mensagemAoClicar);

//ou

c1.addEventListener("click", (evento) => {
  alert("aljdjh");

  const el = evento.target;

  el.classList.add("destaque");
});

//adicionar o evento em todos os itens do array "cursos"

cursos.map((elemento) => {
  elemento.addEventListener("click", (evento) => {
    mensagemAoClicar();
    const el = evento.target;

    console.log(`Clicou em: ${el.innerHTML}`);

    el.classList.add("destaque");
  });
});
