const letters = ['a', 'b', 'c'];

const newLetters = letters.map((letter) => `${letter}++`)

console.log(newLetters);


const array = [
    {
      name: "Product 1",
      price: 1000,
      stock: 10
    },
    {
      name: "Product 2",
      price: 2000,
      stock: 20
    }
]

function solution(array) {
	return array.map((item) => ({
        ...item,
        taxes: Math.trunc( item.price * .19 )
    }));
};

console.log(solution(array));