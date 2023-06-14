//ANALISAR NOVA ESTRITURA DE CÓDIGO E VER O QUE ACONTECEU ANTERIORMENTE, 
const key = "e7f4f52c71e0f15967cf64c30033356c"

// buscando no servidor os dados e alterando //
function  putting_screen(dados){
    document.querySelector(".city").innerHTML = "Tempo em " + dados.name;
    document.querySelector(".temperatura").innerHTML = dados.main.temp;
}

// SEMPRE QUE FOR PEGAR OS DADOS DE UM SERVIDOR, É IMPORTANTE USAR FUNÇÕES ASSICRONAS- async //
// 
async function searchCity(city) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br`)
    .then(response => response.json())
    // CONSTANTE PARA GUARDAS DOS DADOS (AWAIT) FETCH PARA ACESSAR O SERVIDOR //
    // json = transforma o dado recebido do servidor me JavaScript. //
    console.log(dados);

    putting_screen(dados); // Chama a função putting_screen() para atualizar o texto da classe "city" no HTML
  
    console.log(dados); 
}

// Pegando as informações do input associado ao clique do botão
function click_search() {
    const city = document.querySelector(".input_search").value;

    searchCity(city);
}



























/*
const key = "e7f4f52c71e0f15967cf64c30033356c";

function putting_screen(dados) {
  document.querySelector(".city").innerHTML = "Tempo em " + dados.name;
  document.querySelector(".temperatura").innerHTML = dados.maiin.temp;
}

async function searchCity(city) {
  const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br`)
    .then(response => response.json());
  
  putting_screen(dados); // Chama a função putting_screen() para atualizar o texto da classe "city" no HTML
  
  console.log(dados);
}

function click_search() {
  const city = document.querySelector(".input_search").value;
  searchCity(city);
}
*/