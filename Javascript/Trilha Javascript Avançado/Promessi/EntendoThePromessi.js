// Promise muito foda!
const promessDeUmNumeroQualquer = new Promise((resolve, reject) => {

    setTimeout(() => {
        const number = parseInt(Math.random() * 100);
        resolve(number);

        console.log("Depois do número random");
    }, 1000);
});

console.log("Bora Dog!");

promessDeUmNumeroQualquer
    .then((value) => {
        console.log(value);
    })
    .catch((error) => {
        console.log(error);
    }).finally(() => {
        console
            .log("Promagra finalizado!!");
    })

