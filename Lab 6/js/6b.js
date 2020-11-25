function showParagraph() {
    const paraP = document.createElement("p");
    const text = document.createTextNode("xDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDd");
    paraP.appendChild(text);

    const body = document.querySelector("body");
    body.appendChild(paraP);
}

setTimeout(showParagraph, 5000);
