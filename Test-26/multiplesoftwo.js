function multiplesOfTwo(numbers) {
    return numbers.map(num => num * 2);
}


let numbers = [1, 2, 3, 4];
let multiples = multiplesOfTwo(numbers);
console.log("Multiples of Two:", multiples);
