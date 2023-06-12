const key = "e7f4f52c71e0f15967cf64c30033356c"

// buscando no servidor os dados e alterando //
function  putting_screen(dados){
    documento.querySelector(".city").innerHTML = "Tempo em" + dados.name
}

// SEMPRE QUE FOR PEGAR OS DADOS DE UM SERVIDOR, É IMPORTANTE USAR FUNÇÕES ASSICRONAS- async //
// 
async function searchCity(city) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br`).then(response => response.json())
    // CONSTANTE PARA GUARDAS DOS DADOS (AWAIT) FETCH PARA ACESSAR O SERVIDOR //
    // json = transforma o dado recebido do servidor me JavaScript. //
    console.log(dados);
}

// Pegando as informações do input associado ao clique do botão
function click_search() {
    const city = document.querySelector(".input_search").value;

    searchCity(city);
}