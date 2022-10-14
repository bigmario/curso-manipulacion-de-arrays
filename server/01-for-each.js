const letters = ['a', 'b', 'c'];

for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    console.log('for:', element);
}

letters.forEach(item => {console.log('foreach:', item)});

for (const item of letters) {
    console.log('forof:', item)
}

for (const letter in letters) {
    if (Object.hasOwnProperty.call(letters, letter)) {
        const element = letters[letter];
        console.log('forin:', element);
    }
}