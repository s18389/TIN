function binarySearch(array, key) {

    let left = 0;
    let right = array.length - 1;

    while (left <= right){
        let middleOfArray = left + ((right - left) / 2);

        if(array[middleOfArray] === key) return true;
        else if(key < array[middleOfArray]) right = middleOfArray - 1;
        else left = middleOfArray + 1;

    }
    return false;
}

console.log(binarySearch([1,2,3,4,5,6,7], 7));