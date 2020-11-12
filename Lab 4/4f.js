function isNumberPrime(number) {

    let twoNumber = 0;

    for(let x=1; x<=number; x++){
        if(number%x === 0) twoNumber++;
    }

    return twoNumber === 2;

}

console.log(isNumberPrime(7));