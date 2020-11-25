function checkForm() {
    const numberField = document.querySelector("#numberInput");
    const emailField = document.querySelector("#emailInput");
    const numberVal = document.querySelector("#numberInput").value;
    const emailVal = document.querySelector("#emailInput").value;

    if (!numberVal) {
        console.log("NOOOOOOOOO NUUUUMBEEEEERRRRR");
        numberField.classList.add("is-invalid");
        return false;
    }

    if (!emailVal) {
        console.log("NOOOOOOOO EEEEMAILLLL");
        emailField.classList.add("is-invalid");
        return false;
    }

    const regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const isEmailValid = regex.test(String(emailVal).toLowerCase());
    console.log(isEmailValid);
    if (!isEmailValid) {
        console.log("u sure that u type ur email correctly dude?");
        emailField.classList.add("is-invalid");
        return false;
    }

    numberField.classList.remove("is-invalid");
    emailField.classList.remove("is-invalid");

    return true;
}