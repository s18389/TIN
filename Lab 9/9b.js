function calculate() {
    const formula = {
        num_1: document.getElementById("number_1").value,
        num_2: document.getElementById("number_2").value,
        sign: document.getElementById("chooseSign").value
    };

    const xhr = new window.XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            let p = document.getElementsByTagName("p")[0];
            p.textContent = JSON.stringify(JSON.parse(xhr.responseText));
        }
    };

    xhr.open("POST", "http://localhost:1234/calculate", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(formula));
}
