let tristeza = `eu to muito triste, #AlguémMeHelpa`

let contador = 0; 

while(contador <55){
    console.log(tristeza);
    contador ++;
}

 let listaAleatoria = ["cookies", "chocolate", "risole", "coxinha", "coca cola", "carolinas", "sonho", "pizza", "lasanha"];
;
for(let contador = 0; contador<listaAleatoria.length; contador ++){
    console.log(listaAleatoria[contador]);
}

for(let besteiras in listaAleatoria){
    console.log(besteiras);
}

for(let comidas of listaAleatoria){
      console.log(comidas);
}


let nome = prompt("Digite o seu nome:");
let idade = Number(prompt("Digite sua idade:"));
let filmes = [
    {nome: "Invocação do mal", classificacao: 16, genero: "terror"},
    {nome: "Ponte para terabitia", classificacao: 10, genero: "drama"},
    {nome: "Sr. e Sra. Smith", classificacao: 16, genero: "misterio"},
    {nome: "Divertidamente", classificação: "livre", genero: "animacao"},
    {nome: "Como eu era antes de você", classificacao: 12, genero: "romance"},
    {nome: "A fantástica fabrica de chocolate", classificacao: "livre", genero: "animacao"},
    {nome: "Nerve:Um jogo sem regras", classificacao: 12, genero: "drama/misterio"},
    {nome: "Jogador Nº1", classificacao: 12, genero: "suspense"},
    {nome: "Moana: Um mar de aventuras", classificacao: "livre", genero: "animacao"},
]

for(let filme of filmes){
    if(idade >= filme.classificacao){
        console.log(`${nome}, você pode assistir ao filme ${filme.nome} por ter ${idade} anos.`)
    }
}