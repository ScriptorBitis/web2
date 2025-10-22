console.log('Happy developing ✨')


document.getElementById("xi")
    .addEventListener("input", checkX);

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
    var rValue;
    try {
        rValue = document.querySelector('input[name="radioR"]:checked').value;
        console.log("Получаем r = " + rValue);
        return rValue;
    } catch (err) {
        rValue = '';
        console.log("Получаем r = " + rValue);
        return rValue;
    }

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

function checkThatEverythingIfFill(x, y, r) {
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
    if (checkThatEverythingIfFill(x, y, r)) {
        const url = `check?x=${x}&y=${y}&r=${r}`
        console.log("Текущий url : " + url)
        fetch(url).then(data => data.text())
            .then(data => {
                var hitTable = document.getElementById("hit-table");
                while (hitTable.rows.length > 0) {
                    hitTable.deleteRow(0);
                }
                hitTable.insertAdjacentHTML('afterbegin', data);
                makePointAfterResponse();
            });

    }

}

function sendReqOnLoad() {
    const url = `data`
    console.log("Текущий url : " + url)
    fetch(url).then(data => data.text())
        .then(data => {
            var hitTable = document.getElementById("hit-table");
            while (hitTable.rows.length > 0) {
                hitTable.deleteRow(0);
            }
            hitTable.insertAdjacentHTML('afterbegin', data);
        });
}

window.onload = function () {
    sendReqOnLoad();
}

function makePointAfterResponse() {
    const firstRow = document.querySelector('#hit-table tr');
    if (!firstRow) return;
    const cells = firstRow.cells;

    const x = parseFloat(cells[0].innerText);
    const y = parseFloat(cells[1].innerText);
    const r = parseInt(cells[2].innerText);
    const hitStatus = cells[4].innerText.trim();
    points.get(`${r}`).push([x, y, hitStatus]);
    makePoint(x,y,r,hitStatus);
}



