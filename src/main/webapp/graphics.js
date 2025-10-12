const canvas = document.getElementById("graphic");
const ctx = canvas.getContext("2d");


function drawEvr() {
    ctx.font = "bold 16px Arial";


    ctx.beginPath();
    ctx.moveTo(200, 200);
    ctx.lineTo(200, 400);

    ctx.moveTo(200, 200);
    ctx.lineTo(200, 0);

    ctx.lineTo(215, 15);
    ctx.moveTo(200, 0);
    ctx.lineTo(185, 15);

    ctx.moveTo(200, 200);
    ctx.lineTo(0, 200);

    ctx.moveTo(200, 200);
    ctx.lineTo(400, 200);

    ctx.lineTo(385, 215);
    ctx.moveTo(400, 200);
    ctx.lineTo(385, 185);
    ctx.closePath();
    ctx.fillStyle = "#000000";
    ctx.fillText("Y", 230, 15)
    ctx.fillStyle = "#000000";
    ctx.fillText("X", 385, 170)


//рисуем деления на оси x

    for (let n1 = 40; n1 <= 360; n1 += 40) {
        ctx.moveTo(n1, 200);
        ctx.lineTo(n1, 206);
        ctx.lineTo(n1, 194);

    }
//рисуем деления на оси y

    for (let n1 = 40; n1 <= 360; n1 += 40) {
        ctx.moveTo(200, n1);
        ctx.lineTo(206, n1);
        ctx.lineTo(194, n1);
    }

    ctx.fillText("-4R", 30, 190)
    ctx.fillText("-3R", 70, 190)
    ctx.fillText("-2R", 110, 190)
    ctx.fillText("-1R", 150, 190)
    ctx.fillText("4R", 350, 190)
    ctx.fillText("3R", 310, 190)
    ctx.fillText("2R", 270, 190)
    ctx.fillText("1R", 230, 190)

    ctx.fillText("4R", 210, 40)
    ctx.fillText("3R", 210, 80)
    ctx.fillText("2R", 210, 120)
    ctx.fillText("1R", 210, 160)
    ctx.fillText("-4R", 210, 360)
    ctx.fillText("-3R", 210, 320)
    ctx.fillText("-2R", 210, 280)
    ctx.fillText("-1R", 210, 240)

    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.stroke();
}

document.querySelectorAll('input[type="radio"][name="radioR"]').forEach(radio =>
    radio.addEventListener("click", onclick));

document.getElementById("graphic").addEventListener('click', makePointByClick);

function makePoint(x, y) {
    const centerX = 200;
    const centerY = 200;
    const scale = 40;

    const pixelX = centerX + x * scale;
    const pixelY = centerY - y * scale;


    ctx.beginPath();
    ctx.arc(pixelX, pixelY, 4, 0, 2 * Math.PI);
    ctx.fillStyle = "red";
    ctx.fill();
    return;
}

function makePointByClick(event) {
    var curR = getR();
    if (curR == '') {
        return
    }
    const rect = canvas.getBoundingClientRect();
    const centerX = 200;
    const centerY = 200;
    const scale = 40;
    // для функции makePoint делим на scale
    const x = (event.clientX - rect.left - centerX) / scale;
    const y = (centerY - (event.clientY - rect.top)) / scale;

    sendReqGraph(x, y, r);
    makePoint(x, y);
}

function onclick(e) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let r = e.target.value;
    ctx.beginPath()

    //треугольник  в 2 четверти
    ctx.moveTo(200 - 40 * r, 200);

    ctx.lineTo(200, 200 - r * 40);
    ctx.lineTo(200, 200)
    ctx.lineTo(200 - 40 * r, 200)

    ctx.fillStyle = "#7bc8f6";
    ctx.fill()
    //четверть круга  в 3 четверти
    ctx.moveTo(200, 200);


    ctx.arc(200, 200, r * 40, Math.PI / 2, Math.PI)
    ctx.moveTo(200, 200);
    ctx.moveTo(200, 200 - 40 * r)
    ctx.fill()

    //квадрат 1 К 1 В 4 четверти

    ctx.lineTo(200, 200);
    ctx.lineTo(200 + r * 40, 200);
    ctx.lineTo(200 + r * 40, 200 + r * 40);
    ctx.lineTo(200, 200 + 40 * r)
    ctx.fill()


    ctx.closePath();
    ctx.strokeStyle = "#7bc8f6";
    ctx.lineWidth = 2;
    ctx.stroke();


    drawEvr();
    /*
    if (pointsX.length > 0 && pointsY > 0) {
        for (index = 0; index < pointsX.length; ++index) {
            makePoint(pointsX[index], pointsY[index]);
        }
    }
    */

}




function sendReqGraph(xFromClick, yFromClick, rFromClick) {
    var x = xFromClick;
    var y = yFromClick;
    console.log("Получаем x = " + x);
    console.log("Получаем y = " + y);
    var r = rFromClick;
    const url = `check?x=${x}&y=${y}&r=${r}`
    console.log("Текущий url : " + url)
    fetch(url).then(data => data.text())
        .then(data => console.log(data));

}


drawEvr()