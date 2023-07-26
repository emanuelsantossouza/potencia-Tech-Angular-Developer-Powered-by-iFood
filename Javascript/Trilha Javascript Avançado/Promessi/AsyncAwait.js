const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, 'arquivoCSV/arquivo.csv');



// Com async e Await
async function buscarArquivo() {
    try {
        const arquivo = await fs.promises.readFile(filePath);
        const textoDoarquivo = arquivo.toString('utf8');
        console.log(textoDoarquivo);
    } catch (error)  {console.log(error) }

}

buscarArquivo();

// Sem o async Await
// promiseDaLeituraDoArquivo
//     .then((arq) => arq.toString('utf-8'))
//     .then((textoSemCabecario) => textoSemCabecario.split('\n').slice(1))
//     .then((linhasProntas) => linhasProntas.map((linha) => {
//         const [nome, feitas] = linha.split(';');
//         return {
//             nome,
//             feitas: feitas.trim() === 'true'
//         }
//     }))
//     .then((dadoProntos) => console.log(dadoProntos));

