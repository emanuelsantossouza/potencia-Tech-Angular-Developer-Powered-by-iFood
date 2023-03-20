/* 
    Elabore um algoritmo que calcule o que deve ser pago por um produto, 
    considerando o preço normal de etiqueta e a escolha de condições de
    pagamento.

    Código Condições de pagamento:
    1 - Á vistas Débito, receber 10% de desconto;
    2 - À vista no Dinheiro ou Pix, recebe 15% de desconto;
    3 - Em duas vezes, preço normal de etiqueta sem juros;
    4 - Acima de duas vezes, Preco normal de etiqueta mais juros de 10%;
*/


const produtoEtiqueta = 100;
const formaDPagamento = 5;


if (formaDPagamento === 1) {
    console.log("À vista, você recebeu 10% de desconto. Seu desconto é de: " + (produtoEtiqueta -(produtoEtiqueta * 0.1)));
} else if (formaDPagamento === 2) {
    console.log("À dinheiro ou pix, você recebeu 15% de desconto. Seu desconto é de: " + (produtoEtiqueta - (produtoEtiqueta * 0.15)));
} else if (formaDPagamento === 3) {
    console.log("Em 2X é 0 zuros e sai no preço de etiqueta. ");
} else {
    conta = produtoEtiqueta + (100 / 10);
    console.log("Acima de 2 vezes, você vai pagar 10% de juros " + "O preço é: " + (produtoEtiqueta + (produtoEtiqueta * 0.1)));
}