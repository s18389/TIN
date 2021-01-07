exports.kilometers = function() {
    let val = parseFloat(document.getElementById("kilometers").value);
    document.getElementById("miles").value = (val * 0.62137);
}

exports.miles = function() {
    let val = parseFloat(document.getElementById("miles").value);
    document.getElementById("kilometers").value = (val / 0.62137);
}