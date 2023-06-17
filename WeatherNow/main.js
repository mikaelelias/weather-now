//ANALISAR NOVA ESTRITURA DE CÓDIGO E VER O QUE ACONTECEU ANTERIORMENTE, 
const key = "e7f4f52c71e0f15967cf64c30033356c"

// buscando no servidor os dados e alterando //
function  putting_screen(dados){
    document.querySelector(".city").innerHTML = "Tempo em " + (dados.name || "Nome da cidade não disponível");
    document.querySelector(".temperatura").innerHTML = Math.floor(dados.main.temp) + "°C";
    document.querySelector(".text-forecast").innerHTML = dados.weather[0].description;
    document.querySelector(".humidity").innerHTML = "Umidade: " + dados.main.humidity + "%";
    document.querySelector(".img-forecast").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png` 
    document.querySelector(".text_information").innerHTML = "O tempo na cidade de " + dados.name + " é de " + Math.floor(dados.main.temp) + "°C" + " - " + dados.weather[0].description;
}

// SEMPRE QUE FOR PEGAR OS DADOS DE UM SERVIDOR, É IMPORTANTE USAR FUNÇÕES ASSICRONAS- async //
// 
async function searchCity(city) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`)
    .then(response => response.json())
    // CONSTANTE PARA GUARDAS DOS DADOS (AWAIT) FETCH PARA ACESSAR O SERVIDOR //
    // json = transforma o dado recebido do servidor me JavaScript. //

    putting_screen(dados); // Chama a função putting_screen() para atualizar o texto da classe "city" no HTML
  
    console.log(dados); 
}

// Pegando as informações do input associado ao clique do botão
function click_search() {
    const city = document.querySelector(".input_search").value;

    searchCity(city);
}

//ADICIONANDO ENTER AO BOTÃO //
//MAPEAMENTO DO BOTÃO ADICIONANDO EVENTO A ELE // 

document.addEventListener("keypress",function(e){

  if(e.key === ("Enter")) {
    
    const btn = document.querySelector(".btn")
    btn.click();
  }

});
