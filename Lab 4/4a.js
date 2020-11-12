function factorialRecursion(number) {
    if (number < 0) return -1;
    else if (number === 0) return 1;
    else return (number * factorialRecursion(number - 1));
}
console.log(factorialRecursion(5));



function factorialIteration(number) {
    if(number < 0) return -1;
    else if (number === 0) return 1;
    else {
        let sum = 1;
        for(let x = 1; x <= number; x++){
            sum *= x;
        }
        return sum;
    }
}
console.log(factorialIteration(5));