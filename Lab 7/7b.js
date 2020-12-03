const fs = require("fs");

function someFunction(pathToDir) {
    let readFile = fs.readdirSync(pathToDir);

    console.log("Started to watch directory: " + pathToDir);
    console.log("Files in the directory: ");
    console.log(readFile);


    fs.watch(pathToDir, "utf8", function(event, trigger) {
        console.log(event + " in the file: " + trigger);
    //    console.log("Files in the directory: ");
    //    console.log(readFile);
    });
}

someFunction("./someFolder");
