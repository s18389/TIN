const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
    let number_1;
    let number_2;
    let result;
    let urlObject;
    let calculationOption = req.url.split("?")[0];

    switch (calculationOption){
        case "/add":
             urlObject = url.parse(req.url, true).query;
             number_1 = parseInt(urlObject.number_1);
             number_2 = parseInt(urlObject.number_2);

            if (number_1 && number_2) {
                result = String(number_1 + number_2);
                res.write(number_1 + " + " + number_2 + " = " + result);
                res.end();
            } else {
                res.write("Wrong parameters or URL");
                res.end();
            }
            break;
        case "/sub":
            urlObject = url.parse(req.url, true).query;
             number_1 = parseInt(urlObject.number_1);
             number_2 = parseInt(urlObject.number_2);

            if (number_1 && number_2) {
                result = String(number_1 - number_2);
                res.write(number_1 + " - " + number_2 + " = " + result);
                res.end();
            } else {
                res.write("Wrong parameters or URL");
                res.end();
            }
            break;

        case "/mul" :

            urlObject = url.parse(req.url, true).query;
             number_1 = parseInt(urlObject.number_1);
             number_2 = parseInt(urlObject.number_2);

            if (number_1 && number_2) {
                result = String(number_1 * number_2);
                res.write(number_1 + " * " + number_2 + " = " + result);
                res.end();
            } else {
                res.write("Wrong parameters or URL");
                res.end();
            }

            break;

        case "/div":
            urlObject = url.parse(req.url, true).query;
             number_1 = parseInt(urlObject.number_1);
             number_2 = parseInt(urlObject.number_2);

            if (number_1 && number_2) {
                result = String(number_1 / number_2);
                res.write(number_1 + " / " + number_2 + " = " + result);
                res.end();
            } else {
                res.write("Wrong parameters or URL");
                res.end();
            }
        break;

        default:
            res.write("Wrong parameters or URL");
            res.end();
            break;
    }

});

server.listen(1234);
console.log("Calculator started!")
