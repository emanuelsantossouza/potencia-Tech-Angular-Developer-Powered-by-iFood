const list = [0, 1, , 2, 3, 4, 5, 6, 7, 8, 9, 10];

const elementoEmHtml = list
    .filter((e) => e.nome.startsWith('A'))
    .map(e => `<li>${e.nome}</li>`)
    .join('')