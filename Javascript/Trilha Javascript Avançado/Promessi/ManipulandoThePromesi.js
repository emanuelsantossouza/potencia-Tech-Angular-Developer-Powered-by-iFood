const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, 'arquivoCSV/arquivo.csv');

const promiseDaLeituraDoArquivo = fs.promises.readFile(filePath);

promiseDaLeituraDoArquivo
    .then((arq) => arq.toString('utf-8'))
    .then((textoSemCabecario) => textoSemCabecario.split('\n').slice(1))
    .then((linhasProntas) => linhasProntas.map((linha) => {
        const [nome, feitas] = linha.split(';');
        return {
            nome,
            feitas:feitas.trim() === 'true'
        }
    }))
    .then((dadoProntos) => console.log(dadoProntos));


