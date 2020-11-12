function checkIfPalindrome(word) {

    let flag = true;

    for(let x=0, y=word.length-1; x<= word.length, y>=0; x++, y--){
        if(word[x] !== word[y]) flag = false;
    //    console.log("x: " + word[x]);
    //    console.log("y: " + word[y]);
    }
    return flag
}

console.log(checkIfPalindrome("ala"));