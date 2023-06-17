const list = [0, 1, , 2, 3, 4, 5, 6, 7, 8, 9, 10];

// ForEach uma forma mais resulmida para o for tradicional
// e mais lenta tambem
list.forEach((value, i, valueRef) => {
    console.log(value, i, valueRef);
})



const cb = (value, i, listRef) => {
    console.log(value + i);
}


list.forEach(cb);

for (let i = 0; i < list.length; i++){
    const element = [];
    element[i];
    cb(element, i, list);
}

