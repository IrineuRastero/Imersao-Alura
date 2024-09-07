//console.log(aberturas)
const botaoBranco = document.getElementById("branco"); // Seleciona o botão com o ID "branco"
const botaoPreto = document.getElementById("preto"); // Seleciona o botão com o ID "preto"
let dadosBrancas = document.getElementById("resultados-brancas"); // Seleciona a div onde os dados das brancas serão exibidos
let dadosPretas = document.getElementById("resultados-pretas"); // Seleciona a div onde os dados das pretas serão exibidos

// Adiciona um ouvinte de evento ao botão branco
botaoBranco.addEventListener("click", () => {
  // Remove a classe "ativado" do botão preto
  botaoPreto.classList.remove("ativado");
  // Adiciona a classe "ativado" ao botão branco
  botaoBranco.classList.add("ativado");
  // Esconde os dados das pretas
  dadosPretas.classList.add("inativa");
  // Mostra os dados das brancas
  dadosBrancas.classList.remove("inativa");
});

// Adiciona um ouvinte de evento ao botão preto
botaoPreto.addEventListener("click", () => {
  // Remove a classe "ativado" do botão branco
  botaoBranco.classList.remove("ativado");
  // Adiciona a classe "ativado" ao botão preto
  botaoPreto.classList.add("ativado");
  // Esconde os dados das brancas
  dadosBrancas.classList.add("inativa");
  // Mostra os dados das pretas
  dadosPretas.classList.remove("inativa");
});

// Função para pesquisar e exibir os dados
function pesquisar() {
  // Inicializa as strings que armazenarão os dados a serem exibidos
  let listaBrancas = "";
  let listaPretas = "";

  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  console.log(campoPesquisa)

  // Itera sobre cada dado da lista de brancas
  for (let dado of Brancas) {
    
    if (dado.nome.toLowerCase().includes(campoPesquisa.toLowerCase()) ||
        dado.descricaoCurta.toLowerCase().includes(campoPesquisa.toLowerCase())) {
      // Encontrou um resultado!
      console.log('Encontrado:', dado.nome);}
    
    // Cria uma div para cada dado e adiciona as informações
    listaBrancas += `
      <div class="item">
        <h2>${dado.nome}</h2>
        <iframe src="${dado.linkYoutube}" frameborder="0" allowfullscreen></iframe>
        <p>${dado.descricaoCurta}</p>
      </div>
    `;
  }

  // Itera sobre cada dado da lista de pretas
  for (let info of Pretas) {

      if (info.abertura.toLowerCase().includes(campoPesquisa.toLowerCase()) ||
          info.descricao.toLowerCase().includes(campoPesquisa.toLowerCase())) {
        // Encontrou um resultado!
        console.log('Encontrado:', info.abertura);}
        
    // Cria uma div para cada dado e adiciona as informações
    listaPretas += `
      <div class="item">
        <h2>${info.abertura}</h2>
        <iframe src="${info.link}" frameborder="0" allowfullscreen></iframe>
        <p>${info.descricao}</p>
      </div>
    `;
  }

  // Atualiza o conteúdo das divs com os dados gerados
  dadosBrancas.innerHTML = listaBrancas;
  dadosPretas.innerHTML = listaPretas;
  }