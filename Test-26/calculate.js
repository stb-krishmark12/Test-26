function calculateOperations(num1, num2) {
    
    let add = num1 + num2;
    
    
    let subtract = num1 - num2;
    

    let multiply = num1 * num2;
    
   
    let divide = num1 / num2;

    return {
        addition: add,
        subtraction: subtract,
        multiplication: multiply,
        division: divide
    };
}


let result = calculateOperations(10, 5);
console.log("Addition:", result.addition);
console.log("Subtraction:", result.subtraction);
console.log("Multiplication:", result.multiplication);
console.log("Division:", result.division);
