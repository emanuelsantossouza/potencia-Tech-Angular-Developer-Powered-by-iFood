const produtoEtiqueta = 100;
const formaDPagamento = 4 ;


function contaJurosDezPorcento(formaDPagamento, produtoEtiqueta) {
    if (formaDPagamento >= 3) {
        return produtoEtiqueta + (100 / 10);    
    } 
}

function contaDescontoPixDinherio(formaDPagamento, produtoEtiqueta) {
  if (formaDPagamento == 2) {
    return produtoEtiqueta - (produtoEtiqueta * 0.15);
  }
}

function contaAhVista(formaDPagamento, produtoEtiqueta) {
  if (formaDPagamento === 1) {
    return produtoEtiqueta - (produtoEtiqueta * 0.1);
  }
}

function verificandoFormaDPagamento(formaDPagamento) {
  if (formaDPagamento === 1) {
    return (
      "À vista, você recebeu 10% de desconto. Seu desconto é de: " +
      contaAhVista(formaDPagamento, produtoEtiqueta)
    );
  } else if (formaDPagamento === 2) {
      return(
          "À dinheiro ou pix, você recebeu 15% de desconto. Seu desconto é de: " +
          contaDescontoPixDinherio(formaDPagamento, produtoEtiqueta)
    );
  } else if (formaDPagamento === 3) {
    return("Em 2X é 0 zuros e sai no preço de etiqueta. ");
  } else {
      return (
          "Acima de 2 vezes, você vai pagar 10% de juros " +
          "O preço é: " +
          contaJurosDezPorcento(formaDPagamento, produtoEtiqueta)
    );
  }
}

function main() {
  console.log (verificandoFormaDPagamento(formaDPagamento));
}

main();