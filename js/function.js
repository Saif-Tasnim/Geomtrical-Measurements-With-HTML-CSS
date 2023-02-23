
// setting background color randomly
function setCardBg() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return "#" + randomColor;
}

// receiving id
function getElement(id) {
    document.getElementById(id).style.backgroundColor = setCardBg();
}

// setting background color white
function setCardWhite() {
    const randomColor = "FFF";
    return "#" + randomColor;
}

// receiving id
function getElementWhite(id) {
    document.getElementById(id).style.backgroundColor = setCardWhite();

}

// formula for combo (triangle, rhombus, pentagon)
function comboOfTriangleRhombusPentagon(a, b) {
    return 0.5 * a * b;
}

// formula for combo (Rectangle , Parallelogram)

function comboOfRectangleParallelogram(a, b) {
    return a * b;
}

// formula for eclipse
function eclipse(a, b) {
    return 3.1416 * a * b;
}


// html creation for area calculation part
let i = 1;
function addToCard(res, id) {
    const upperDiv = document.getElementById('upper-div');

    const div = document.createElement('div');

    div.innerHTML = i + "." + "&nbsp; " + id + " &nbsp; " + res + " cm<sup>2</sup><button class='btn bg-primary text-white ms-4 text-center rounded'> Convert to m<sup>2</sup></button>";

    i++;
    div.style.marginTop = "10px";
    upperDiv.appendChild(div);
}

