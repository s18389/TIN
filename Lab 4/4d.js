function alphabeticalOrder(word){
    return Array.from(word).sort().join("");
}

console.log(alphabeticalOrder("webmaster"));