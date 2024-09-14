//Exercício 1. Cálculo da Área de um Retângulo
//Descrição: Crie um programa que declare variáveis para a largura e altura de um retângulo e calcule a área.
let largura = 5
let altura = 10.5
let area = largura * altura
console.log("A área do retângulo é:", area)
//Exercício 2. Verificação de Maioridade
//Descrição: Crie um programa que verifique se uma pessoa é maior de idade com base em sua idade.
let idade = 17;
if(idade < 18){
    console.log("Menor de idade")
}else{
    console.log("Maior de idade")
}
// Exercício 3. Cálculo de Salário com Desconto
//Descrição: Crie um programa que calcule o salário final de um funcionário após aplicar um desconto de 10%.
let salario = 3000.95
let valor_final = salario - (0.1 * salario)
console.log("O salário final é de R$:", valor_final)
//Exercício 4. Verificação de Estoque
//Descrição: Uma loja está organizando seu inventário. Ela tem um array com o número de unidades de cada produto.
//Escreva um programa que verifique se algum produto está com menos de 5 unidades em estoque e exiba uma mensagem
//avisando sobre o reabastecimento.
let unidProdutos = [5, 4, 6, 7, 8, 0, -2];
/*for(let i = 0; i < unidProdutos.length; i++){
    if(unidProdutos[i] < 5){
        console.log("É necessário que o estoque desse produto seja reabastecido");
    }else{
        console.log("O estoque do produto está ok");
    }
}*/

for(let produto of unidProdutos){
    if(produto < 5){
        console.log("É necessário que o estoque desse produto seja reabastecido,");
    }else{
        console.log("O estoque do produto está ok!");
    }
}
