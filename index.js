
//console.log ('LISTAS')
// 1 atividade do slide
//console.log('Listas 1')
//let frutas = ['Maçã','Pera','Banana','Laranja','Abacate'];
//console.log (frutas[0], frutas[1], frutas[2], frutas[3], frutas[4]);
//console.log ();
//console.log (frutas[0]);
//console.log ();
//console.log(frutas[4]);

//espaçamento
//console.log();

//2 atividade do slide
//console.log('Listas 2');
//let at2 = [2, 7, 9, 6, 12, 55];
//let soma = 0;

//for (let calc = 0; calc < at2.length; calc++) {
  //  soma = soma + at2[calc];
//};
//console.log(soma)   

//console.log()
//att 3
//console.log('Listas 3')
//let at3 = [23, 58, 95, 75, 12, 1, 0, 4, 9, 34];
//let maior = Math.max(...at3);
//console.log(maior);


//console.log()
//console.log()
//TUPLAS
console.log('TUPLAS');
console.log();

//1 tuplas
//console.log('Tuplas 1')
//const aluno = ['José', 16, '3tds'] 
//console.log(aluno[0], aluno[1], aluno[2])
//console.log()

//2 tuplas
//console.log('Tuplas 2')
//const produto = ['Biscoito de chocolate', 4.75, 22 ]
//let text = (`O ${produto[0]} está atualmente com o valor de R$${produto[1]} e possuímos ${produto[2]}.`);
//console.log(text);
//console.log()

//3 tuplas
console.log('Tuplas 3')
const filmes = [
    ('Transformers', 2007, 'Ação')
    ('Jurassic World', 2015, 'Ficção Científica')
    ('Devoradores de Estrelas', 2026, 'Aventura')
];
filmes.forEach(([nome, ano, tipo]) => {
    console.log(`Nome: ${nome} | Ano: ${ano} | Tipo: ${tipo} `);
});



//const filmes = [
  //  ["O Senhor dos Anéis", 2001, "Fantasia"],
   // ["Interestelar", 2014, "Ficção Científica"],
   // ["Matrix", 1999, "Ação"]
  //];
  
  //filmes.forEach((filme) => {
    //const nomeDoFilme = filme[0];
    //const anoLancamento = filme[1];
    //const tipoGenero = filme[2];
    
    // Agora você tem as informações totalmente isoladas
    //console.log("Título:", nomeDoFilme);
//    console.log("Ano:", anoLancamento);
  //  console.log("Gênero:", tipoGenero);
    //console.log("-------------------"); // Linha divisória
  //});
