

/*
Faça um algoritmo que leia dois valores inteiros A e B 
se os valores forem iguais devem ser somado os dois, 
caso contrário multiplique A por B ao final do cálculo 
ao final do cálculo atribuir o valor para uma variável C.
*/
var n1,n2,c;
alert("Bem vindo (a) ao sistema de Java Script basico - Criado por Marcos");
   n1 = Number (prompt("Por Favor digite o primeiro valor inteiro"));
   n2 = Number (prompt("Por Favor digite o Segundo valor inteiro" ));
   
   if (n1==n2){
     c =  (n1+n2)
   } else {
       c =(n1*n2)
   }
   
   
 alert(`o valor do calculo foi: ${c}`);
    