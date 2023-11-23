function ordenarPorPontos(a, b){
    return b.pontos - a.pontos;
}

var times = [
    {escudo: "https://e.imguol.com/futebol/brasoes/40x40/america-mg.png", nome: "América-MG", vitoria: 0, empate: 0, derrota: 0, pontos: 0},
    {escudo: "https://e.imguol.com/futebol/brasoes/40x40/athletico.png", nome: "Athlético-PR", vitoria: 0, empate: 0, derrota: 0, pontos: 0},
    {escudo: "https://e.imguol.com/futebol/brasoes/40x40/atletico-mg.png", nome: "Atlético-MG", vitoria: 0, empate: 0, derrota: 0, pontos: 0},
    {escudo: "https://e.imguol.com/futebol/brasoes/40x40/bahia.png", nome: "Bahia", vitoria: 0, empate: 0, derrota: 0, pontos: 0},
    {escudo: "https://e.imguol.com/futebol/brasoes/40x40/botafogo.png", nome: "Botafogo", vitoria: 0, empate: 0, derrota: 0, pontos: 0},
    {escudo: "https://e.imguol.com/futebol/brasoes/40x40/corinthians.png", nome: "Corinthians", vitoria: 0, empate: 0, derrota: 0, pontos: 0},
    {escudo: "https://e.imguol.com/futebol/brasoes/40x40/coritiba.png", nome: "Coritiba", vitoria: 0, empate: 0, derrota: 0, pontos: 0},
    {escudo: "https://e.imguol.com/futebol/brasoes/40x40/cruzeiro.png", nome: "Cruzeiro", vitoria: 0, empate: 0, derrota: 0, pontos: 0},
    {escudo: "https://e.imguol.com/futebol/brasoes/40x40/cuiaba.png", nome: "Cuiabá", vitoria: 0, empate: 0, derrota: 0, pontos: 0},
    {escudo: "https://e.imguol.com/futebol/brasoes/40x40/flamengo.png", nome: "Flamengo", vitoria: 0, empate: 0, derrota: 0, pontos: 0},
    {escudo: "https://e.imguol.com/futebol/brasoes/40x40/fluminense.png", nome: "Fluminense", vitoria: 0, empate: 0, derrota: 0, pontos: 0},
    {escudo: "https://e.imguol.com/futebol/brasoes/40x40/fortaleza.png", nome: "Fortaleza", vitoria: 0, empate: 0, derrota: 0, pontos: 0},
    {escudo: "https://e.imguol.com/futebol/brasoes/40x40/goias.png", nome: "Goiás", vitoria: 0, empate: 0, derrota: 0, pontos: 0},
    {escudo: "https://e.imguol.com/futebol/brasoes/40x40/gremio.png", nome: "Grêmio", vitoria: 0, empate: 0, derrota: 0, pontos: 0},
    {escudo: "https://e.imguol.com/futebol/brasoes/40x40/internacional.png", nome: "Internacional", vitoria: 0, empate: 0, derrota: 0, pontos: 0},
    {escudo: "https://e.imguol.com/futebol/brasoes/40x40/palmeiras.png", nome: "Palmeiras", vitoria: 0, empate: 0, derrota: 0, pontos: 0},
    {escudo: "https://e.imguol.com/futebol/brasoes/40x40/red-bull-bragantino.png", nome: "Bragantino", vitoria: 0, empate: 0, derrota: 0, pontos: 0},
    {escudo: "https://e.imguol.com/futebol/brasoes/40x40/santos.png", nome: "Santos", vitoria: 0, empate: 0, derrota: 0, pontos: 0},
    {escudo: "https://e.imguol.com/futebol/brasoes/40x40/sao-paulo.png", nome: "São Paulo", vitoria: 0, empate: 0, derrota: 0, pontos: 0},
    {escudo: "https://e.imguol.com/futebol/brasoes/40x40/vasco.png", nome: "Vasco", vitoria: 0, empate: 0, derrota: 0, pontos: 0}    
];

times.sort(ordenarPorPontos);

var elementoTabela = document.getElementById("tabelaTimes");

exibirTela();


function exibirTela() {
    elementoTabela.innerHTML = ""
    for (var i = 0; i < times.length; i++){
        var time = times[i];
        elementoTabela.innerHTML += `
          <tr>
            <td>${i+1}º</td>
            <td><img src="${time.escudo}" alt="${time.nome}"></td>
            <td>${time.nome}</td>
            <td>${time.vitoria}</td>
            <td>${time.empate}</td>
            <td>${time.derrota}</td>
            <td>${time.pontos}</td>
            <td><button onClick="adicionarVitoria(${i})">Vitória</button></td>
            <td><button onClick="adicionarEmpate(${i})">Empate</button></td>
            <td><button onClick="adicionarDerrota(${i})">Derrota</button></td>
          </tr>
    `;
    }
}

function adicionarVitoria(index) {
    times[index].vitoria++;
    times[index].pontos += 3;
    times.sort(ordenarPorPontos);
    exibirTela();
}
function adicionarEmpate(index) {
    times[index].empate++;
    times[index].pontos++;
    times.sort(ordenarPorPontos);
    exibirTela();
}
function adicionarDerrota(index) {
    times[index].derrota++;
    times.sort(ordenarPorPontos);
    exibirTela();
}
