/* Faça um algoritmo que dado as 03 notas de um determinado Aluno em um semestre da faculdade,
calcule e imprima sua média e a sua classificação conforme a tabela abaixo.

Média - (nota 1 + nota 2 + nota 3) / 3;

Classificação
- Média menor que 5 = Reprovado
- Média entre 5 e 7 = Recuperação
- Média acima de 7  = Aprovado
*/

let nota1 = 7;
let nota2 = 5;
let nota3 = 6;
let media = (nota1 + nota2 + nota3) / 3;

console.log('A média do Aluno foi de ' + media);

if (media < 5){
    console.log('O Aluno foi Reprovado')

}else if (media >= 5 && media <= 7){
    console.log('O Aluno esta de Recuperação')

}else{
    console.log('O Aluno foi Aprovado')
}