const temperature = require('./temperature.js');
const distance = require('./distance.js');

window.onload = function() {
    document.getElementById("celsius").addEventListener('change', temperature.celsius);
    document.getElementById("celsius").addEventListener('input', temperature.celsius);
    document.getElementById("kelvin").addEventListener('change', temperature.kelvin);
    document.getElementById("kelvin").addEventListener('input', temperature.kelvin);
    document.getElementById("fahrenheit").addEventListener('change', temperature.fahrenheit);
    document.getElementById("fahrenheit").addEventListener('input', temperature.fahrenheit);
    document.getElementById("kilometers").addEventListener('change', distance.kilometers);
    document.getElementById("kilometers").addEventListener('input', distance.kilometers);
    document.getElementById("miles").addEventListener('change', distance.miles);
    document.getElementById("miles").addEventListener('input', distance.miles);
}