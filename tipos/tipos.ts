//string

let nome: string = 'Augusto';
console.log(nome)

//nome

let idade: number = 27
idade = 27.5
console.log(idade)

//boolean 
let possuiHobbies: boolean = true
var arm1 = 'arm'

if (possuiHobbies) {

    console.log(arm1)
    console.log('possuihobbies true')
} else {
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
let hobbies: [string, string, any] = ['Cozinhar', 'Desenhar', 55];
console.log(hobbies[0])
console.log(typeof hobbies)


let hobbies2: [any, string, number] = ['Jos', 'TESTE', 23]
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


let ruasImportantes: [any, any] = ['teste', 'teste']

console.log(ruasImportantes)

//enums
enum DiaDaSemana {
    Segunda = 1,
    Terca,
    Quarta,
    Quinta,
    Sexta,
    Sabado,
    Domingo
}

console.log(DiaDaSemana.Terca); // Imprime: 


enum Cor {
    Cinza, //0  
    Verde = 100,  // 1 
    Azul,    // 2
    Laranja,
    Amarelo,
    Vermelho = 100

}

let minhaCor: Cor = Cor.Verde
console.log(minhaCor)


enum MesesAno {
    JANEIRO = 1,
    FEVEREIRO,
    MARCO,
    ABRIL,
    MAIO,
    JUNHO,
    JULHO,
    AGOSTO,
    SETEMBRO,
    OUTUBRO,
    NOVEMBRO,
    DEZEMBRO
}
enum DiasMes {
    DIA_01 = 1,
    DIA_02,
    DIA_03,
    DIA_04,
    DIA_05,
    DIA_06,
    DIA_07,
    DIA_08,
    DIA_09,
    DIA_10,
    DIA_11,
    DIA_12,
    DIA_13,
    DIA_14,
    DIA_15,
    DIA_16,
    DIA_17,
    DIA_18,
    DIA_19,
    DIA_20,
    DIA_21,
    DIA_22,
    DIA_23,
    DIA_24,
    DIA_25,
    DIA_26,
    DIA_27,
    DIA_28,
    DIA_29,
    DIA_30,
    DIA_31
}

const dataTotal = new Date()
const pegardia = dataTotal.getDay()
const DiaDeHoje = DiasMes[pegardia]


const dataAtual = new Date();
const mesAtual = dataAtual.getMonth() + 1; // soma 1 porque o método getMonth() retorna um índice de 0 a 11
const nomeMesAtual = MesesAno[mesAtual];

console.log(`Estamos no mês de ${nomeMesAtual}`);
console.log(`${dataTotal}`);


enum Operation {
    Add = "+",
    Subtract = "-",
    Multiply = "*",
    Divide = "/"
}



namespace Operation {
    export function calculate(op: Operation, x: number, y: number) {
        switch (op) {
            case Operation.Add:
                return x + y;
            case Operation.Subtract:
                return x - y;
            case Operation.Multiply:
                return x * y;
            case Operation.Divide:
                return x / y;
            default:
                throw new Error(`Invalid operation: ${op}`);
        }
    }
}


console.log(Operation.calculate(Operation.Divide, 550, 2))


//any
let carro: any = 'BMW'
console.log(carro)
carro = {
    marca: 'BMW',
    ano: 2023
}
console.log(carro)

var meunome = 'Samuel'
function retornaMeuNome(): string {
    return meunome;
}

console.log(retornaMeuNome())

function retornaVazio(): void {
    console.log("Vazio!")
}

retornaMeuNome()
retornaVazio()


function multiplicar(numA: number, numB: number): number {
    return numA * numB
}

console.log(multiplicar(5, 9))
let calculo: (x: number, y: number) => number

calculo = multiplicar
console.log(calculo(5, 6))

function somar(numero1: number, numero2: number) {
    return numero1 + numero2
}

console.log(somar(5, 6))

//objetos 

let usuario: { nome: string, idade: number } = {
    nome: 'Samuel',
    idade: 22
}

console.log(usuario)

/* let supervisores: {nome:string}[] = [
    {
        nome:'Samuel'
    },
    {
        nome:'Jose'
    }
]

console.log(supervisores)

var horario:number = 9

if(horario <= 8){
     var ponto = 'No horario!'
}else {
    var ponto = 'Fora do horario'
}
console.log(ponto)
 */

type Funcionario = {
    supervisores: string[],
    baterPonto: (horas: number) => string
}

let funcionario: Funcionario = {
    supervisores: ['Ana', 'Fernando'],
    baterPonto(horario: number): string {
        if (horario <= 8) {
            return 'Horario certo!'
        } else {
            return 'Horario errado!'
        }
    }
}

console.log(funcionario.supervisores)
console.log(funcionario.baterPonto(8))



//union types
let nota: number | string | boolean = 10;

console.log(`Minha nota: ${nota}!`)
nota = 'Oi'
console.log(`Minha nota: ${nota}!`)
nota = true
console.log(`Minha nota: ${nota}!`)



let valor = true
//checando tipos
if (typeof valor === 'number') {
    console.log('é um number!')
} else {
    console.log('Não é number, mas é: ' + typeof valor)
}
