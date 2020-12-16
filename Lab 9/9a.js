const express = require("express");
const app = express();
const port = 1234;
app.use(express.json());

const cors = require('cors');
app.use(cors());
//chrome.exe --disable-web-security

app.post("/calculate", (request, respond) => {
    const results = [];
    let num_1 = parseInt(request.body.num_1);
    let num_2 = parseInt(request.body.num_2);
    let sign = request.body.sign;
    let result = 0, allFormulaObject;
    switch(sign) {
        case "add":
            result = num_1 + num_2;
            results.push(allFormulaObject = {num_1 : num_1, sign : sign, num_2 : num_2,  result : result});
            break;
        case "sub":
            result = num_1 - num_2;
            results.push(allFormulaObject = {num_1 : num_1, sign : sign, num_2 : num_2,  result : result});
            break;
        case "mul":
            result = num_1 * num_2;
            results.push(allFormulaObject = {num_1 : num_1, sign : sign, num_2 : num_2,  result : result});
            break;
        case "dev":
            result = num_1 / num_2;
            results.push(allFormulaObject = {num_1 : num_1, sign : sign, num_2 : num_2,  result : result});
            break;
        default:
            results.push(allFormulaObject = {num_1 : num_1, sign : sign, num_2 : num_2,  result : result});
            break;
    }
    respond.json(results);
});


app.listen(port, () => console.log(`Listening on port ${port}`));
