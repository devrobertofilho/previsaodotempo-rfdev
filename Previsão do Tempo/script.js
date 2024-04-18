let chave = "51354532be4f2463868c9ad6edb5672e"


function cliqueiNoBotao() {
    let cidade = document.querySelector(".input-cidade").value
    buscarCidade(cidade)
}


async function buscarCidade(cidade) {
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&appid=51354532be4f2463868c9ad6edb5672e&units=metric").then(resposta => resposta.json())
    colocarNaTela(dados)
}

function colocarNaTela(dados) {
    console.log(dados)

    document.querySelector('.cidade').innerHTML = 'Tempo em ' + dados.name
    document.querySelector('.temp').innerHTML = Math.floor(dados.main.temp) + '°C'
    document.querySelector('.umidade').innerHTML = 'Umidade ' + (dados.main.humidity) + '%'
}