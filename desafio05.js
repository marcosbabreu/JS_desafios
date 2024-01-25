/*
Faça um algoritmo que leia o nome e as três notas de uma 
disciplina de um aluno e ao final escreva o nome do aluno, 
sua média e se ele foi aprovado, sabendo-se que a média 
para aprovação é igual ou superior a 8.
*/

let n1,n2,n3,media;
alert("Bem vindo (a) ao sistema de Java Script basico - Criado por Marcos");
   n1 = Number (prompt("Por Favor digite a primeira nota do aluno"));
   n2 = Number (prompt("Por Favor digite a Segunda nota do aluno"));
   n3 = Number (prompt("Por Favor digite a Terceira nota do aluno"));

media =(n1+n2+n3)/3

   
    if(media>=8 ){
        alert(`A media do aluno foi: ${media} ele está: APROVADO`);
    
   } else  {
    alert(`A media do aluno foi: ${media} ele está: REPROVADO`);
   }
   
   
 