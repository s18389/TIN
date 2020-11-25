function addRowToTable(){
    const input_1 = document.querySelector("#input_1");
    const input_2 = document.querySelector("#input_2");
    const input_3 = document.querySelector("#input_3");

    let myTable = document.querySelector("table");

    const newRow = myTable.insertRow(-1);

    const inputOneCell = newRow.insertCell(0);
    const inputTwoCell = newRow.insertCell(1);
    const inputThreeCell = newRow.insertCell(2);

    inputOneCell.innerHTML = input_1.value;
    inputTwoCell.innerHTML = input_2.value;
    inputThreeCell.innerHTML = input_3.value;

    return true
}