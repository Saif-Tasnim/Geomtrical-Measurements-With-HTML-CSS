// header part

/* after clicking blog button the page will redirect to blog.html pages */

function redirection() {
    window.open('blog.html', '_target')
}

document.getElementById('blog-btn').onclick = redirection;


// main part

/* set random bg color in every card hover */

document.getElementById('t-col').addEventListener('mouseover', function () {
    getElement('t-col')
})

document.getElementById('r-col').addEventListener('mouseover', function () {
    getElement('r-col')
})
document.getElementById('p-col').addEventListener('mouseover', function () {
    getElement('p-col')
})
document.getElementById('rh-col').addEventListener('mouseover', function () {
    getElement('rh-col')
})
document.getElementById('pen-col').addEventListener('mouseover', function () {
    getElement('pen-col')
})
document.getElementById('e-col').addEventListener('mouseover', function () {
    getElement('e-col')
})

/* set white bg after mouse out from every card */

document.getElementById('t-col').addEventListener('mouseout', function () {
    getElementWhite('t-col')
})
document.getElementById('r-col').addEventListener('mouseout', function () {
    getElementWhite('r-col')
})
document.getElementById('p-col').addEventListener('mouseout', function () {
    getElementWhite('p-col')
})
document.getElementById('rh-col').addEventListener('mouseout', function () {
    getElementWhite('rh-col')
})
document.getElementById('pen-col').addEventListener('mouseout', function () {
    getElementWhite('pen-col')
})
document.getElementById('e-col').addEventListener('mouseout', function () {
    getElementWhite('e-col')
})

/* Work with Calculate Button For triangle element */

document.getElementById('tri').addEventListener('click', function () {
    const width_f = document.getElementById('tri-b');
    const height_f = document.getElementById('tri-h');

    const width = width_f.value;
    const height = height_f.value;

    if ((width > 0 && !isNaN(width)) && (height > 0 && !isNaN(height))) {

        const calc = comboOfTriangleRhombusPentagon(width, height).toFixed(2);
        addToCard(calc, "Triangle");

        width_f.value = "";
        height_f.value = "";
    }

    else {
        alert('Please enter some valid input and greater than 0');
        width_f.value = "";
        height_f.value = "";
    }
})

document.getElementById('rh').addEventListener('click', function () {
    const width_tf = document.getElementById('rh-d1');
    const height_tf = document.getElementById('rh-d2');
    const width = width_tf.value;
    const height = height_tf.value;

    if ((width > 0 && !isNaN(width)) && (height > 0 && !isNaN(height))) {

        const cal = comboOfTriangleRhombusPentagon(width, height).toFixed(2);
        addToCard(cal, "Rhombus");
        width_tf.value = "";
        height_tf.value = "";
    }

    else {
        alert('Please enter some valid input and greater than 0');
        width_tf.value = "";
        height_tf.value = "";
    }
})

document.getElementById('penta').addEventListener('click', function () {
    const width_tf = document.getElementById('penta-p');
    const height_tf = document.getElementById('penta-b');
    const width = width_tf.value;
    const height = height_tf.value;

    if ((width > 0 && !isNaN(width)) && (height > 0 && !isNaN(height))) {

        const calc = comboOfTriangleRhombusPentagon(width, height).toFixed(2);
        addToCard(calc, "Pentagon");

        width_tf.value = "";
        height_tf.value = "";
    }

    else {
        alert('Please enter some valid input and greater than 0');
        width_tf.value = "";
        height_tf.value = "";
    }
})




document.getElementById('rec').addEventListener('click', function () {
    const width_tf = document.getElementById('rec-w');
    const height_tf = document.getElementById('rec-l');
    const width = width_tf.value;
    const height = height_tf.value;

    if ((width > 0 && !isNaN(width)) && (height > 0 && !isNaN(height))) {

        addToCard(comboOfRectangleParallelogram(width, height).toFixed(2), "Rectangle");

        width_tf.value = "";
        height_tf.value = "";
    }

    else {
        alert('Please enter some valid input and greater than 0');
        width_tf.value = "";
        height_tf.value = "";
    }
})



document.getElementById('para').addEventListener('click', function () {
    const width_tf = document.getElementById('para-b');
    const height_tf = document.getElementById('para-h');
    const width = width_tf.value;
    const height = height_tf.value;

    if ((width > 0 && !isNaN(width)) && (height > 0 && !isNaN(height))) {

        //console.log(comboOfRectangleParallelogram(width, height));
        addToCard(comboOfRectangleParallelogram(width, height).toFixed(2), "Parallelogram");

        width_tf.value = "";
        height_tf.value = "";
    }

    else {
        alert('Please enter some valid input and greater than 0');
        width_tf.value = "";
        height_tf.value = "";
    }
})

document.getElementById('ec').addEventListener('click',function(){
    const width_tf = document.getElementById('pi-a');
    const height_tf = document.getElementById('pi-b');
    const width = width_tf.value;
    const height = height_tf.value;

    if ((width > 0 && !isNaN(width)) && (height > 0 && !isNaN(height))) {

        const calc = eclipse(width, height).toFixed(2);
        addToCard(calc, "Eclipse");

        width_tf.value = "";
        height_tf.value = "";
    }

    else {
        alert('Please enter some valid input and greater than 0');
        width_tf.value = "";
        height_tf.value = "";
    }
})
