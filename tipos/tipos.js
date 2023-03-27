"use strict";
//string
let nome = 'Augusto';
console.log(nome);
//nome
let idade = 27;
idade = 27.5;
console.log(idade);
//boolean 
let possuiHobbies = true;
var arm1 = 'arm';
if (possuiHobbies) {
    console.log(arm1);
    console.log('possuihobbies true');
}
else {
    console.log('possuihobbies false');
}
console.log(arm1);
//tipos explicitos
let minhaIdade;
minhaIdade = 27;
console.log(typeof minhaIdade);
minhaIdade = 'idade é 27';
console.log(typeof minhaIdade);
///array
/* let hobbies = [] = ['Cozinhar', 'Desenhar'];
 */
let hobbies = ['Cozinhar', 'Desenhar', 55];
console.log(hobbies[0]);
console.log(typeof hobbies);
let hobbies2 = ['Jos', 'TESTE', 23];
console.log(hobbies2);
let usuarios = ['Samuel Pereira', 'Jose Augusto'];
let senhas = ['k5WVmqd7Gwe7iwuTqM3gv!6@0', 'aLLODu9F2K9x3Bc!jApbI4kaG'];
let usuarioTeste = 'Jose Augusto';
let senhaTeste = 'aLLODu9F2K9x3Bc!jApbI4kaG';
let autenticado = false;
// Verifica se o usuário e a senha informados estão na lista de usuários válidos
if (usuarios.indexOf(usuarioTeste) >= 0 && senhas.indexOf(senhaTeste) >= 0) {
    autenticado = true;
}
// Exibe uma mensagem indicando se o usuário está autenticado ou não
if (autenticado) {
    console.log('Usuário autenticado com sucesso!');
}
else {
    console.log('Usuário não autenticado!');
}
let ruasImportantes = ['teste', 'teste'];
console.log(ruasImportantes);
var DiaDaSemana;
(function (DiaDaSemana) {
    DiaDaSemana[DiaDaSemana["Segunda"] = 1] = "Segunda";
    DiaDaSemana[DiaDaSemana["Terca"] = 2] = "Terca";
    DiaDaSemana[DiaDaSemana["Quarta"] = 3] = "Quarta";
    DiaDaSemana[DiaDaSemana["Quinta"] = 4] = "Quinta";
    DiaDaSemana[DiaDaSemana["Sexta"] = 5] = "Sexta";
    DiaDaSemana[DiaDaSemana["Sabado"] = 6] = "Sabado";
    DiaDaSemana[DiaDaSemana["Domingo"] = 7] = "Domingo";
})(DiaDaSemana || (DiaDaSemana = {}));
console.log(DiaDaSemana.Terca); // Imprime: 
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 1] = "Verde";
    Cor[Cor["Azul"] = 2] = "Azul";
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
let minhaCor = Cor.Verde;
console.log(minhaCor);
