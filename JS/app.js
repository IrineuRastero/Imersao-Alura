//console.log(aberturas)
const botaoBranco = document.getElementById("branco")
const botaoPreto = document.getElementById("preto")


botaoBranco.addEventListener("click", () => {
    botaoPreto.classList.remove("ativado");
    botaoBranco.classList.add("ativado");
    dadosPretas.classList.add("inativa");
    dadosBrancas.classList.remove("inativa");
});

botaoPreto.addEventListener("click", () => {
    botaoBranco.classList.remove("ativado");
    botaoPreto.classList.add("ativado");
    dadosBrancas.classList.add("inativa");
    dadosPretas.classList.remove("inativa");

});


let dadosBrancas = document.getElementById("resultados-brancas")

for (let dado of Brancas) {

    dadosBrancas.innerHTML += `

     <div class="item">
                     <h2>${Brancas.nome}</h2>
    
                     <iframe src="${Brancas.linkYoutube}" frameborder="0" allowfullscreen></iframe>
                    
                     <p>${Brancas.descricaoCurta}</p>
                 </div>
     `;
}
let dadosPretas = document.getElementById("resultados-pretas")

 for (let info of Pretas) {

     dadosPretas.innerHTML += `

     <div class="item">
                      <h2>${Pretas.abertura}</h2>
    
                      <iframe src="${Pretas.link}" frameborder="0" allowfullscreen></iframe>
                    
                      <p>${Pretas.descricao}</p>
                  </div>
 `;
 }
