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
