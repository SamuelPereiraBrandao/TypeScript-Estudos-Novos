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
//enums
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
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 101] = "Azul";
    Cor[Cor["Laranja"] = 102] = "Laranja";
    Cor[Cor["Amarelo"] = 103] = "Amarelo";
    Cor[Cor["Vermelho"] = 100] = "Vermelho";
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
console.log(minhaCor);
var MesesAno;
(function (MesesAno) {
    MesesAno[MesesAno["JANEIRO"] = 1] = "JANEIRO";
    MesesAno[MesesAno["FEVEREIRO"] = 2] = "FEVEREIRO";
    MesesAno[MesesAno["MARCO"] = 3] = "MARCO";
    MesesAno[MesesAno["ABRIL"] = 4] = "ABRIL";
    MesesAno[MesesAno["MAIO"] = 5] = "MAIO";
    MesesAno[MesesAno["JUNHO"] = 6] = "JUNHO";
    MesesAno[MesesAno["JULHO"] = 7] = "JULHO";
    MesesAno[MesesAno["AGOSTO"] = 8] = "AGOSTO";
    MesesAno[MesesAno["SETEMBRO"] = 9] = "SETEMBRO";
    MesesAno[MesesAno["OUTUBRO"] = 10] = "OUTUBRO";
    MesesAno[MesesAno["NOVEMBRO"] = 11] = "NOVEMBRO";
    MesesAno[MesesAno["DEZEMBRO"] = 12] = "DEZEMBRO";
})(MesesAno || (MesesAno = {}));
var DiasMes;
(function (DiasMes) {
    DiasMes[DiasMes["DIA_01"] = 1] = "DIA_01";
    DiasMes[DiasMes["DIA_02"] = 2] = "DIA_02";
    DiasMes[DiasMes["DIA_03"] = 3] = "DIA_03";
    DiasMes[DiasMes["DIA_04"] = 4] = "DIA_04";
    DiasMes[DiasMes["DIA_05"] = 5] = "DIA_05";
    DiasMes[DiasMes["DIA_06"] = 6] = "DIA_06";
    DiasMes[DiasMes["DIA_07"] = 7] = "DIA_07";
    DiasMes[DiasMes["DIA_08"] = 8] = "DIA_08";
    DiasMes[DiasMes["DIA_09"] = 9] = "DIA_09";
    DiasMes[DiasMes["DIA_10"] = 10] = "DIA_10";
    DiasMes[DiasMes["DIA_11"] = 11] = "DIA_11";
    DiasMes[DiasMes["DIA_12"] = 12] = "DIA_12";
    DiasMes[DiasMes["DIA_13"] = 13] = "DIA_13";
    DiasMes[DiasMes["DIA_14"] = 14] = "DIA_14";
    DiasMes[DiasMes["DIA_15"] = 15] = "DIA_15";
    DiasMes[DiasMes["DIA_16"] = 16] = "DIA_16";
    DiasMes[DiasMes["DIA_17"] = 17] = "DIA_17";
    DiasMes[DiasMes["DIA_18"] = 18] = "DIA_18";
    DiasMes[DiasMes["DIA_19"] = 19] = "DIA_19";
    DiasMes[DiasMes["DIA_20"] = 20] = "DIA_20";
    DiasMes[DiasMes["DIA_21"] = 21] = "DIA_21";
    DiasMes[DiasMes["DIA_22"] = 22] = "DIA_22";
    DiasMes[DiasMes["DIA_23"] = 23] = "DIA_23";
    DiasMes[DiasMes["DIA_24"] = 24] = "DIA_24";
    DiasMes[DiasMes["DIA_25"] = 25] = "DIA_25";
    DiasMes[DiasMes["DIA_26"] = 26] = "DIA_26";
    DiasMes[DiasMes["DIA_27"] = 27] = "DIA_27";
    DiasMes[DiasMes["DIA_28"] = 28] = "DIA_28";
    DiasMes[DiasMes["DIA_29"] = 29] = "DIA_29";
    DiasMes[DiasMes["DIA_30"] = 30] = "DIA_30";
    DiasMes[DiasMes["DIA_31"] = 31] = "DIA_31";
})(DiasMes || (DiasMes = {}));
const dataTotal = new Date();
const pegardia = dataTotal.getDay();
const DiaDeHoje = DiasMes[pegardia];
const dataAtual = new Date();
const mesAtual = dataAtual.getMonth() + 1; // soma 1 porque o método getMonth() retorna um índice de 0 a 11
const nomeMesAtual = MesesAno[mesAtual];
console.log(`Estamos no mês de ${nomeMesAtual}`);
console.log(`${dataTotal}`);
var Operation;
(function (Operation) {
    Operation["Add"] = "+";
    Operation["Subtract"] = "-";
    Operation["Multiply"] = "*";
    Operation["Divide"] = "/";
})(Operation || (Operation = {}));
(function (Operation) {
    function calculate(op, x, y) {
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
    Operation.calculate = calculate;
})(Operation || (Operation = {}));
console.log(Operation.calculate(Operation.Divide, 550, 2));
//any
let carro = 'BMW';
console.log(carro);
carro = {
    marca: 'BMW',
    ano: 2023
};
console.log(carro);
var meunome = 'Samuel';
function retornaMeuNome() {
    return meunome;
}
console.log(retornaMeuNome());
function retornaVazio() {
    console.log("Vazio!");
}
retornaMeuNome();
retornaVazio();
function multiplicar(numA, numB) {
    return numA * numB;
}
console.log(multiplicar(5, 9));
let calculo;
calculo = multiplicar;
console.log(calculo(5, 6));
function somar(numero1, numero2) {
    return numero1 + numero2;
}
console.log(somar(5, 6));
//objetos 
let usuario = {
    nome: 'Samuel',
    idade: 22
};
console.log(usuario);
let funcionario = {
    supervisores: ['Ana', 'Fernando'],
    baterPonto(horario) {
        if (horario <= 8) {
            return 'Horario certo!';
        }
        else {
            return 'Horario errado!';
        }
    }
};
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(8));
//union types
let nota = 10;
console.log(`Minha nota: ${nota}!`);
nota = 'Oi';
console.log(`Minha nota: ${nota}!`);
nota = true;
console.log(`Minha nota: ${nota}!`);
let valor = true;
//checando tipos
if (typeof valor === 'number') {
    console.log('é um number!');
}
else {
    console.log('Não é number, mas é: ' + typeof valor);
}
