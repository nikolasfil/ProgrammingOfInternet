

const array = []

function clearing() {
    // alert('works')
    document.getElementById("grade").value = "";
    document.getElementById("mean").value = "";
    
}

function meaning() {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += parseInt(array[i])
    }
    let mean = sum / array.length;
    document.getElementById("mean").value = mean;
}

function numberof() {
    document.getElementById("numberof").value = array.length;
}

function checker() {
    let grade = document.getElementById("grade").value;
    const a = NaN;
    const err = document.getElementById("errors");    
    err.style.display = "none";

    if (( grade ) && (parseInt(grade) > 0 || parseInt(grade) > 10)) {
        
        err.style.display = "block";
        clearing();
    } else {
        array.push(document.getElementById("grade").value);
    }
}

function works() {
    checker()
    clearing()
    meaning()
    numberof()
    // alert('works')
}