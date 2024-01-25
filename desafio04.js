/*
A partir do preço à vista de um determinado produto, 
calcule o preço total a pagar e o valor da prestação mensal,
referentes ao pagamento parcelado. Se o pagamento for
parcelado em 3 vezes deve ser dado um acréscimo de 10% 
no total a ser pago. Se o parcelamento for em 5 vezes, 
o acréscimo será de 20%.
*/

let n1,n2,c;
alert("Bem vindo (a) ao sistema de Java Script basico - Criado por Marcos");
   n1 = Number (prompt("Por Favor digite o valor do produto"));
   n2 = Number (prompt("Por Favor digite o quantas parcelas limitadas a 5x vezes" ));

   
    if(n2>=3 && n2<5){
       c =(n1*1.1)
   } else if (n2>=5) {
    c= (n1*1.2)
   } else {
    c =  (n1)
   }
   
   
 alert(`o valor total do produto ficou: R$ ${c}`);
    