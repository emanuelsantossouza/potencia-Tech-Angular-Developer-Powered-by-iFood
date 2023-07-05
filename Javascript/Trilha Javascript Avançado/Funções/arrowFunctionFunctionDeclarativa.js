
// Arrow Declarativa, existe contexto nela
function funcaoDeclarativa() {
    console.log(this);
}

// Arrow Function, não existe contexto nela
const arrowFuncation = () => {
    console.log(this);
}

const Pessoa = {
    nome: 'Emanuel',
    funcaoDeclarativa,
    arrowFuncation
}

Pessoa.funcaoDeclarativa();
Pessoa.arrowFuncation();