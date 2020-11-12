function fibonacii(n) {
    if (n <= 1) return 1;
    return fibonacii(n-2) + fibonacii(n-1);
}

console.log(fibonacii(5));