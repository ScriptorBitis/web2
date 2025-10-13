<%--
  Created by IntelliJ IDEA.
  User: Никита
  Date: 13.10.2025
  Time: 20:44
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="lib"%>

<lib:forEach items="${pointArr}" var="point">
    <tr>
        <th>${point.x}</th>
        <th>${point.y}</th>
        <th>${point.r}</th>
        <th>${point.executionTime}</th>
        <th>${point.hitStatus}</th>
    </tr>
</lib:forEach>
