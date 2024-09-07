//console.log(aberturas)
const botaoBranco = document.getElementById("branco")
const botaoPreto = document.getElementById("preto")
const caixa = document.getElementById("resultados-brancas")
const caixaPreta = document.getElementById("resultados-pretas")


botaoBranco.addEventListener("click", () => {
    botaoPreto.classList.remove("ativado");
    botaoBranco.classList.add("ativado");
    caixaPreta.classList.add("inativa");
    caixa.classList.remove("inativa");
});

botaoPreto.addEventListener("click", () => {
    botaoBranco.classList.remove("ativado");
    botaoPreto.classList.add("ativado");
    caixa.classList.add("inativa");
    caixaPreta.classList.remove("inativa");

});


let dadosBrancas = document.getElementById("resultados-brancas")


console.log(dadosBrancas);

for (let dado of Brancas) {

    dadosBrancas.innerHTML += `

     <div class="item">
                     <h2>${Brancas.nome}</h2>
    
                     <iframe src="${Brancas.linkYoutube}" frameborder="0" allowfullscreen></iframe>
                    
                     <p>${Brancas.descricaoCurta}</p>
                 </div>
     `;
};

// let dadosPretas = document.getElementById("resultados-pretas")

// for (let info of Pretas) {

//     dadosPretas.innerHTML += `

//     <div class="item">
//                      <h2>${Pretas.abertura}</h2>
    
//                      <iframe src="${Pretas.link}" frameborder="0" allowfullscreen></iframe>
                    
//                      <p>${Pretas.descricao}</p>
//                  </div>
// `;
// }
