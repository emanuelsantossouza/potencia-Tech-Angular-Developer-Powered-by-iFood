"use strict";
function concatArray(...itens) {
    return new Array().concat(...itens);
}
const numArray = concatArray([1, 4], [3]);
const stgArray = concatArray(["felipe", "goku"], ["vegeta"]);
numArray.push("Saitama");
console.log(numArray);
console.log(stgArray);
function concatArrayComGeneric(...itens) {
    return new Array().concat(...itens);
}
const numeArray = concatArrayComGeneric([1, 4], [3]);
const strgArray = concatArrayComGeneric(["felipe", "goku"], ["vegeta"]);
console.log(numArray);
console.log(stgArray);
