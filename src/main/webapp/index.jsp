<%@ page import="java.time.LocalDateTime" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="alfarius.goida.models.Point"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="lib"%>

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Лабка№2</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>

<body>
<div class="main-content">

    <div id="coordinates" class="coordinates">
        <div id="coordinatesheader" class="coordinatesheader">Нажмите здесь, чтобы переместить</div>
        <form name="Rform" method="post" target="_self">

            <p>Текущее время = <%= LocalDateTime.now()%>
            </p>
            <div class="IzmX">Изменение X:</div>
            <label for="xi"></label>
            <input class="labelx" id="xi" name="x" maxlength="10" pattern="-?[0-9]*\.?[0-9]*" type="text" required
                   placeholder="[-5...3]">


            <div class="IzmY">Изменение Y:</div>
            <p><label for="Y">
                <select id="Y" name="y">
                    <option value="-4">-4</option>
                    <option value="-3">-3</option>
                    <option value="-2">-2</option>
                    <option value="-1">-1</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </label></p>

            <div class="radio-group">
                <label><input type="radio" name="radioR" value="1"> 1</label>
                <label><input type="radio" name="radioR" value="2"> 2</label>
                <label><input type="radio" name="radioR" value="3"> 3</label>
                <label><input type="radio" name="radioR" value="4"> 4</label>
                <label><input type="radio" name="radioR" value="5"> 5</label>
            </div>
        </form>
    </div>
    <div class="canvasAndDude">
        <div class="canvas">
            <canvas id="graphic" width="405" height="405"></canvas>
        </div>
        <div id="dude" class="dude">
            <img src="resources/dude.png" width="400" height="400">
        </div>
    </div>

    <div class="prikols">
        <script src="useless.js"></script>
        <button id="catButton" class="btn" onclick=createCat()>~Мявк!~ ฅ^◐ω◑^ฅ</button>
        <button id="sendRequest" class="btn" onclick=sendReq()>Проверить попадание точки</button>
    </div>


    <div class="hitTable">
        <table class="table">
            <thead>
            <tr>
                <th> X</th>
                <th> Y</th>
                <th> R</th>
                <th> Время выполнения (мс)</th>
                <th>Попадание??????</th>
            </tr>
            </thead>
            <tbody id="hit-table">
            <lib:forEach items="${pointArr}" var="point">
            <tr class="hit-row">
                <th>${point.x}</th>
                <th>${point.y}</th>
                <th>${point.r}</th>
                <th>${point.executionTime}</th>
                <th>${point.hitStatus}</th>
            </tr>
            </lib:forEach>
            </tbody>
        </table>
    </div>
</div>

<script src="graphics.js"></script>
<script src="index.js"></script>
</body>
</html>
