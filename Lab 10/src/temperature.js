exports.kelvin = function() {
    let val = parseFloat(document.getElementById("kelvin").value);
    document.getElementById("celsius").value = (val - 273.15);
    document.getElementById("fahrenheit").value = ((val - 273.15) * 9 / 5 + 32);
}

exports.celsius = function() {
    let val = parseFloat(document.getElementById("celsius").value);
    document.getElementById("fahrenheit").value = ((val * 9 / 5) + 32);
    document.getElementById("kelvin").value = (val + 273.15);
}

exports.fahrenheit = function() {
    let val = parseFloat(document.getElementById("fahrenheit").value);
    document.getElementById("celsius").value = ((val - 32) * 5 / 9);
    document.getElementById("kelvin").value = ((val - 32) * 5 / 9 + 273.15);
}
