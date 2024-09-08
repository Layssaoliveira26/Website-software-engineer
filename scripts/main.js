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