/*- Elabore um programa que leia um numero e devolva para o usuário o dobro do número informado.
~~~javascript

  Entrada de dados: ler um número.
  Processamento: calcular o dobro.
  Saída: informar o resultado.*/

  const informeN = prompt('Informe um número para receber o dobro dele!')
  const dobro = informeN * 2
  const resultado1 = alert('O dobro do numero' + ' ' + informeN + ' ' + 'é' + ' ' + dobro +'.')
  if (dobro) {
    String=false
    alert("Pressione a tecla *F5* para utilizar outro número.")
  }else{
    alert("ERRO: Você não digitou um número válido!")
  }

 /*- Elabore um programa que calcule o valor do jantar, sendo o valor total do jantar
 composto pela conta junto com a taxa de atendimento do garçom. 

~~~javascript

  Entrada de dados: ler o valor da conta.
  Processamento: calcular junto com o valor do custo do garçom.
  Saída: informar o resultado.*/

  const valor = prompt("Digite o valor do jantar!")
  const valorDoJantar = parseInt(valor)
  var garçomTaxa = valorDoJantar*0.10
  var conta = valorDoJantar + garçomTaxa
  const resultado2 = alert('O valor do jantar junto a taxa do garçom foi de' + ' ' + conta + "!");

/*- Elabore um programa para uma pizzaria, 
o qual leia o valor total de uma conta e quantos 
clientes vão pagá-la. Calcule e informe o valor
a ser pago por cliente.*/

const entrada = prompt("Obrigado pela preferência! Por favor informe o valor da conta.")
const entrada1 = parseInt(entrada);
const nmrClientes = prompt("Quantos clientes irão pagar a conta?")
const entrada3 = parseInt(nmrClientes)
const process = entrada1 / entrada3
const resultado = alert('Cada cliente vai pagar' + ' ' + process)




