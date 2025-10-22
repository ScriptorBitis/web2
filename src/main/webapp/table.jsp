<%@ page import="java.util.Collections" %>
<%@ page import="java.util.List" %>
<%@ page import="java.util.ArrayList" %>
<%@ page import="alfarius.goida.models.Point" %>
<%--
  Created by IntelliJ IDEA.
  User: Никита
  Date: 13.10.2025
  Time: 20:44
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="lib"%>
<%
    ArrayList<Point> pointArr = (ArrayList<Point>) request.getAttribute("pointArr");
    Collections.reverse(pointArr);
     response.setCharacterEncoding("UTF-8");
%>
<lib:forEach items="${pointArr}" var="point">
    <tr>
        <th>${point.x}</th>
        <th>${point.y}</th>
        <th>${point.r}</th>
        <th>${point.executionTime}</th>
        <th>${point.hitStatus ? "hit" : "miss"}</th>
    </tr>
</lib:forEach>
<%
    Collections.reverse(pointArr);
%>