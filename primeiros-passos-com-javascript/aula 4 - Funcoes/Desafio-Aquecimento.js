function WriteMyName(MyName) {
    return `Meu nome é ${MyName}`;
}


function ehMaiorDIdade(idade) {
    if (idade < 18) {
        console.log(WriteMyName("Emanuel")  + " e sou de menor!!!");
    } else {
        console.log(WriteMyName("Emanuel") + " e sou de maior");
    }
}

ehMaiorDIdade(17);