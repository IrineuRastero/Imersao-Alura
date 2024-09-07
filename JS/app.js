//console.log(aberturas)

let section = document.getElementById("caixa-resultados")


for (let dado of aberturas){

section.innerHTML += `
    <div class="item-resultado">
                <a href="${dado.link}" target="_blank">
                    <h2>${dado.nome}</h2>
                </a>
                <p>${dado.descricao}</p>
    </div>
`
}