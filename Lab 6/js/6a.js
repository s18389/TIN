function calculateTemperature(){

    const celsiusField = document.querySelector("#celsiusField");
    const fahrenheitField = document.querySelector("#fahrenheitField");
    const celsiusValue = parseInt(celsiusField.value);
    const fahrenheitValue = parseInt(fahrenheitField.value);

    switch(celsiusValue || fahrenheitValue) {
        case celsiusValue:
            fahrenheitField.value = (celsiusValue * 9/5) + 32;
            break;
        case fahrenheitValue:
            celsiusField.value = (fahrenheitValue - 32) * (5/9);
            break;
        default:
            const div = document.getElementById('warmingDiv');
            div.innerHTML = 'Fill one of the fields';
            setTimeout(function (){div.innerHTML = ''}, 2000);
    }
}

function clearTemperatures() {
    const celsiusField = document.querySelector("#celsiusField");
    const fahrenheitField = document.querySelector("#fahrenheitField");
    celsiusField.value = "";
    fahrenheitField.value = "";
}