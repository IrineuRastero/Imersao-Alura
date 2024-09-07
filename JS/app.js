//console.log(aberturas)
const botaoBranco = document.getElementById("branco")
const botaoPreto = document.getElementById("preto")
let dadosBrancas = document.getElementById("resultados-brancas")
let dadosPretas = document.getElementById("resultados-pretas")


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


function pesquisar(){

let listaBrancas =""
let listaPretas =""

for (let dado of Brancas) {

     listaBrancas += `

     <div class="item">
                     <h2>${dado.nome}</h2>
    
                     <iframe src="${dado.linkYoutube}" frameborder="0" allowfullscreen></iframe>
                    
                     <p>${dado.descricaoCurta}</p>
                 </div>
     `;
}


 for (let info of Pretas) {

     listaPretas += `

     <div class="item">
                      <h2>${info.abertura}</h2>
    
                      <iframe src="${info.link}" frameborder="0" allowfullscreen></iframe>
                    
                      <p>${info.descricao}</p>
                  </div>
 `;
 }


 
 dadosBrancas.innerHTML = listaBrancas

 dadosPretas.innerHTML = listaPretas
}