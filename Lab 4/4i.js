function amountToCoins(amount, arrayOfCoins)
{
    let left;
    if (amount === 0) return [];
    else {
        if (amount >= arrayOfCoins[0]) {
            left = (amount - arrayOfCoins[0]);
            return [arrayOfCoins[0]].concat(amountToCoins(left, arrayOfCoins));
        } else {
            arrayOfCoins.shift();
            return amountToCoins(amount, arrayOfCoins);
        }
    }
}

console.log(amountToCoins(46, [25,10,5,2,1]));