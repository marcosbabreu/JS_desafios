/*
Escreva um algoritmo que receba dois números reais 
e um código de seleção do usuário. Se o código digitado
for 1, faça o algoritmo adicionar os dois números
previamente digitados e mostrar o resultado; se o
código de seleção for 2, os números deverão ser
multiplicados; se o código de seleção for 3, o primeiro
número deve ser dividido pelo segundo.
*/

let n1,n2,opcao, result;
alert("Bem vindo (a) ao sistema de Java Script basico - Criado por Marcos");
   n1 = Number (prompt("Por Favor digite o primeiro numero"));
   n2 = Number (prompt("Por Favor digite o segundo numero"));
   opcao = Number (prompt("Por Favor digite uma opção podendo ser 1, 2 ou 3"));


if (opcao==1){
result = Number(n1+n2)
alert(`o resultado da opcao escolhida é : ${result}`);
} else if (opcao==2){
    result = Number (n1*n2)
    alert(`o resultado da opcao escolhida é : ${result}`);
} else if (opcao==3){
    result= Number (n1/n2)
    alert(`o resultado da opcao escolhida é : ${result}`);
} else {
    alert(`Repita o processo opcao escolhida esta invalida, favor usar 1,2 ou 3`);
}