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
let hobbies = ['Cozinhar', 'Desenhar'];
let listaHobbies = document.createElement('ul');
for (let hobby of hobbies) {
    let item = document.createElement('li');
    item.textContent = hobby;
    listaHobbies.appendChild(item);
}
document.body.appendChild(listaHobbies);