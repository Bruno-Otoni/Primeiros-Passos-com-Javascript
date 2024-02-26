/* O IMC - Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação
sobre a condição de peso de uma pessoa.

Fórmula do IMC:
IMC = Peso / (Altura * Altura)

Elabore um algoritimo que dado o pesa e a altura de um adulto mostre a sua condição de acordo com a tabela
abaixo:

Condição do IMC:
- Menor que 18,5 = Abaixo do Peso
- Entre 18,5 e 25 = Peso Normal
- Entre 25 e 30 = Sobrepeso
- Entre 30 e 40 = Obeso
- Acima de 40 = Obesidade Grave
*/

let peso = 135
let altura = 1.90
const IMC = peso / (altura * altura)

console.log('O seu IMC é de = ' + IMC.toFixed(2))

if (IMC < 18.50) {
    console.log('Você esta Abaixo do Peso')
} else if (IMC >= 18.50 && IMC < 25) {
    console.log('Você esta no seu Peso Normal')
} else if (IMC >= 25 && IMC <= 30) {
    console.log('Você esta com Sobrepeso')
} else if (IMC >= 30 && IMC < 40) {
    console.log('Você esta Obeso')
} else {
    console.log('Você esta com Obesidade Grave')
}