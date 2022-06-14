const array = [1, 2, 3, 4, 5, 6, 7, 8];

function pairNumber(value) {
    return value % 2 === 0;
}

let filtered = array.filter(pairNumber);
console.log(filtered);

