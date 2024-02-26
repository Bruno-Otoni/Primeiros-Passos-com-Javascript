/*Faça um programa para calcular o valor gasto em uma viagem

    Existem 05 variaveis para esse calculo:
    1 - Valor do Etanol
    2 - Valor da Gasolina
    3 - Tipo de combustivel utilizada no momento
    4 - Consumo medio de combustivel por Kilometro
    5 - Distancia percorrida

    */

const etanol = 3.42
const gasolina = 5.40
const consumoEtanol = 12
const consumoGasolina = 9
let distancia = 100
let mediaEtanol = distancia / consumoEtanol
let mediaGasolina = distancia / consumoGasolina
let custoEtanol = mediaEtanol * etanol
let custoGasolina = mediaGasolina * gasolina
let combustivel = 'Gasolina'

if (combustivel === 'Etanol') {
    let custo = custoEtanol
    console.log('O custo dessa viagem será de ' + custo.toFixed(2))
} else {
    custo = custoGasolina
    console.log('O custo dessa viagem será de ' + custo.toFixed(2))
}
