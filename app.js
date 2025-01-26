//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
  // Captura o valor do campo de texto
  const inputAmigo = document.getElementById("amigo");
  const nome = inputAmigo.value.trim();

  // Valida a entrada: não permite valores vazios
  if (nome === "") {
    alert("Por favor, insira um nome.");
    return; 
  }

  // Adiciona o nome ao array de amigos
  amigos.push(nome);

  // Atualiza a lista de amigos na interface
  atualizarLista();

  // Limpa o campo de entrada
  inputAmigo.value = "";
}

// Função para atualizar a lista de amigos na tela
function atualizarLista() {
  const listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = ""; // Limpa a lista antes de renderizar

  // Itera sobre o array de amigos para criar a lista
  amigos.forEach((amigo, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${amigo}`;
    li.className = "list-item"; // Classe para estilização, caso necessário
    listaAmigos.appendChild(li);
  });
}

// Função para sortear um amigo
function sortearAmigo() {
  // Valida se há nomes na lista antes de sortear
  if (amigos.length === 0) {
    alert("A lista está vazia! Adicione nomes antes de sortear.");
    return;
  }

  // Gera um índice aleatório para o array de amigos
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceAleatorio];

  // Exibe o nome sorteado na tela
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li class="result-item">O amigo secreto sorteado é: <strong>${amigoSorteado}</strong>!</li>`;
}

