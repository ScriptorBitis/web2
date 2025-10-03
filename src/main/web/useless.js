function createCat() {
    const cat = document.createElement("img");

    cat.setAttribute("src", "resources/cat.png");
    cat.setAttribute("alt", "Кися");
    cat.setAttribute("height", "135 vh");
    cat.setAttribute("width", "135 vw");
    cat.style.position = "absolute";
    document.body.appendChild(cat);

    let x = 5;
    let y = 5 ;
    let xVec = Math.random() * 3 + 1;
    let yVec = Math.random() * 3 + 1;

    function animateCat() {
        x += xVec;
        y += yVec;

        if ((Math.abs(x) + cat.width > window.innerWidth - 5) || (x < 5)) {
            xVec *= (-1);
            //meoh();
        }
        if ((Math.abs(y) + cat.height > window.innerHeight - 5) || (y < 5)) {
            yVec *= (-1);
            //meoh();
        }

        cat.style.top = y + "px";
        cat.style.right = x + "px";

        requestAnimationFrame(animateCat);
    }

    animateCat();

    cat.addEventListener("mouseover", startKillingCat);

    function startKillingCat(e) {
        e.target.setAttribute("src", "resources/nuke.gif");
        //cat.setAttribute("src", "resources/nuke.gif");
        setTimeout(killCat, 1000, cat)
    }

    function killCat(cat) {
        cat.remove();
    }

}

//requestAnimationFrame
function meoh() {

}

dragElement(document.getElementById("coordinates"));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        // если присутствует, заголовок - это место, откуда вы перемещаете DIV:
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        // в противном случае переместите DIV из любого места внутри DIV:
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // получить положение курсора мыши при запуске:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // вызов функции при каждом перемещении курсора:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // вычислить новую позицию курсора:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // установите новое положение элемента:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // остановка перемещения при отпускании кнопки мыши:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

