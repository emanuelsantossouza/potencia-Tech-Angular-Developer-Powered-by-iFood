/*
    Faça um algoritimo que dando as 3 notas tiradas por um aluno em um semestre da faculdade 
    calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

    Media = (nota 1 + nota 2 + nota 3) / 3;

    Classificação 
    - Média menor que 5, reprovação;
    - Média entre 5 e 7, recuperação;
    - Média acima de 7, passou de semestre;
*/

const nota1 = 7;
const nota2 = 9;
const nota3 = 8;

const media = (nota1 + nota2 + nota3) / 3;

if (media <= 5) {
    console.log(`Reprovação!!! Sua média foi ` + Math.floor(media));
} else if (media <= 7) {
    console.log(`Recuperação!!! Sua média foi ` + Math.floor(media));
} else {
    console.log(`Aprovado!!! Sua média foi ` + Math.floor(media)); // Metodo Floor Aredonnda o valor
}