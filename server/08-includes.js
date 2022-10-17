const pets = [ "cat", "Dog", "bat" ]

const mappedPets = pets.map((item)=>item.toLowerCase())

const includes = mappedPets.includes('dog');

console.log(includes);


function solution(word, query) {
	const mappedWord = word.toLowerCase();
	const includes = mappedWord.includes(query);
	return includes; 
}; 

console.log(solution('Ana lava la tina', 'ana'));