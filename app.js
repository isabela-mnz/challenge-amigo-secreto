let amigos = [];

function adicionarAmigoSecreto() {
    const nomeInput = document.getElementById("amigo");
    const nome = nomeInput.value.trim();

    if (nome !== "") {
        amigos.push(nome); // Adiciona o nome à lista de amigos
        nomeInput.value = ""; // Limpa o campo de input
        exibirListaAmigos(); // Atualiza a lista de amigos
    } else {
        alert("Por favor, insira um nome válido.");
    }
}

function exibirListaAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa a lista antes de adicionar os novos nomes

    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigoSecreto() {
    if (amigos.length < 2) {
        alert("O sorteio precisa de pelo menos dois participantes!");
        return;
    }

    let sorteados = [...amigos]; // Cópia da lista de amigos
    let resultado = {};

    for (let amigo of amigos) {
        let possiveis = sorteados.filter(a => a !== amigo); // Remove o próprio nome da lista
        
        if (possiveis.length === 0) { // Se não houver opções, refaz o sorteio
            return sortearAmigoSecreto();
        }

        let sorteado = possiveis[Math.floor(Math.random() * possiveis.length)];
        
        resultado[amigo] = sorteado;
        sorteados = sorteados.filter(a => a !== sorteado); // Remove o sorteado da lista
    }

    exibirResultado(resultado); // Exibe o resultado
}

function exibirResultado(resultado) {
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "<h2>Resultado do Sorteio</h2>";

    for (let [amigo, sorteado] of Object.entries(resultado)) {
        const p = document.createElement("p");
        p.textContent = `${amigo} sorteou ${sorteado}`;
        resultadoDiv.appendChild(p);
    }
}


