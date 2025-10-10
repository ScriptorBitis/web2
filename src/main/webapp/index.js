console.log('Happy developing ✨')


document.getElementById("xi")
    .addEventListener("click", checkX);

function checkX(e) {
    console.log("Началась проверка вот этого - >" + e.target.value);


    //пережиток прошлого
    e.target.value = e.target.value.replace(/[^0-9.-]/g, "");


    const input = e.target;
    const selectionStart = input.selectionStart;
    let value = input.value;

    if (value === "" || value === "-" || value === "." || value === "-.") {
        return;
    }

    if (isNaN(Number(value))) {
        input.value = value.slice(0, selectionStart - 1) + value.slice(selectionStart);
        input.setSelectionRange(selectionStart - 1, selectionStart - 1);

    }
    if (Number(value) > 3) {
        input.value = value.slice(0, selectionStart - 1) + value.slice(selectionStart);
        input.setSelectionRange(selectionStart - 1, selectionStart - 1);
    }
    if (Number(value) < -5) {
        input.value = value.slice(0, selectionStart - 1) + value.slice(selectionStart);
        input.setSelectionRange(selectionStart - 1, selectionStart - 1);

    }
}

function getR() {
    var rValue = document.querySelector('input[type="radio"][name="radioR"]').value;
    console.log("Получаем r = " + rValue);
    return rValue;
}

function getY() {
    var y = document.getElementById("Y").value;
    console.log("Получаем y = " + y);
    return y;

}

function getX() {
    var x = document.getElementById("xi").value;
    console.log("Получаем x = " + x);
    return x;

}

const dude = document.getElementById("dude");

function checkThatEverythingIfFill() {
    var x = getX();
    var y = getY();
    var r = getR();

    const isEmpty = x === "" || y === "" || r === "" ||
        isNaN(x) || isNaN(y) || isNaN(r);

    if (isEmpty) {
        dude.style.opacity = "1";
        dude.style.display = "block";
        return false;
    } else {
        dude.style.opacity = "0";
        dude.style.display = "none";
        return true;
    }
}

function sendReq() {
    var x = getX();
    var y = getY();
    var r = getR();
    if (checkThatEverythingIfFill()) {
        const url = `check?x=${x}&y=${y}&r=${r}`
        console.log("Текущий url : "+ url)
        fetch(url).then(data =>data.text())
            .then(data => console.log(data));
    }


}

