function findLongestString(sequenceOfWords) {
    let arrayOfWords = [];
    arrayOfWords = sequenceOfWords.split(' ');
    let max = 0;
    let whatWord = 0;
    for(let x = 0; x<arrayOfWords.length; x++){
        if(arrayOfWords[x].length > max) {
            max = arrayOfWords[x].length;
            whatWord = x;
        }
    }

    return arrayOfWords[whatWord];
}

console.log(findLongestString("wordOne wordTwo wordThreeeeeeee sthsth"));