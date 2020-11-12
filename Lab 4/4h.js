function  find2ndNumber(arrayNumber) {

    let max2;
    let min2;

    arrayNumber.sort();


    //2nd largest
    for(let i = 0; i < arrayNumber.length - 1 ; i++){
        for(let j = 0; j < arrayNumber.length - 1 - i; j++){
            if (arrayNumber[j] < arrayNumber[j+1]){
                let temp = arrayNumber[j];
                arrayNumber[j] = arrayNumber [j+1];
                arrayNumber[j+1] = temp;
            }
        }
    }
    max2 = arrayNumber[1];

    //2nd smallest
    for(let i = 0; i < arrayNumber.length - 1 ; i++){
        for(let j = 0; j < arrayNumber.length - 1 - i; j++){
            if (arrayNumber[j] > arrayNumber[j+1]){
                let temp = arrayNumber[j];
                arrayNumber[j] = arrayNumber [j+1];
                arrayNumber[j+1] = temp;
            }
        }
    }
    min2 = arrayNumber[1];

    return {max2, min2};

    //OR  return [max2, min2];

}

console.log(find2ndNumber([2,3,3,3,5,5,5,6,6]));