type heroi = {
    name: string;
    vulgo: string;
};

function printObjects(pessoa: heroi) {
    console.log(pessoa);    
}

printObjects({
    name: "Bruce Wayne",
    vulgo: "Batman",
})