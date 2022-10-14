const numbers = [5,4,8,6,2]

const reduced = numbers.reduce((sum, item)=>sum+item, 0);
console.log(reduced);


const items = [5, 6, 7, 6, 5, 7, 7, 8]
const reducedItems = items.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] =1
    } else {
        obj[item] = obj[item] +1
    }
    return obj
}, {});
console.log(reducedItems);