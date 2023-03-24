//string

let nome:string = 'Augusto';
console.log(nome)

//nome

let idade:number = 27
idade = 27.5
console.log(idade)

//boolean 
let possuiHobbies:boolean = true
var arm1 = 'arm'

if(possuiHobbies){

console.log(arm1)
console.log('possuihobbies true')
}else {
    console.log('possuihobbies false')

}
console.log(arm1)
//tipos explicitos
let minhaIdade: any
minhaIdade = 27
console.log(typeof minhaIdade)
minhaIdade = 'idade é 27'
console.log(typeof minhaIdade)



///array

/* let hobbies = [] = ['Cozinhar', 'Desenhar'];
 */
let hobbies: [string,string,any] = ['Cozinhar', 'Desenhar',55];
console.log(hobbies[0])
console.log(typeof hobbies)


let hobbies2: [any,string,number] = ['Jos','TESTE',23]
console.log(hobbies2)


let usuarios: string[] = ['Samuel Pereira', 'Jose Augusto'];
let senhas: string[] = ['k5WVmqd7Gwe7iwuTqM3gv!6@0', 'aLLODu9F2K9x3Bc!jApbI4kaG'];
let usuarioTeste: string = 'Jose Augusto';
let senhaTeste: string = 'aLLODu9F2K9x3Bc!jApbI4kaG';
let autenticado: boolean = false;

// Verifica se o usuário e a senha informados estão na lista de usuários válidos
if (usuarios.indexOf(usuarioTeste) >= 0 && senhas.indexOf(senhaTeste) >= 0) {
  autenticado = true;
}

// Exibe uma mensagem indicando se o usuário está autenticado ou não
if (autenticado) {
  console.log('Usuário autenticado com sucesso!');
} else {
  console.log('Usuário não autenticado!');
}



