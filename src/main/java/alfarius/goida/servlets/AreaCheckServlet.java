package alfarius.goida.servlets;


import jakarta.servlet.ServletContext;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/area-check")
public class AreaCheckServlet extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        PrintWriter out = response.getWriter();
        String x = request.getParameter("x");
        String y = request.getParameter("y");
        String r = request.getParameter("r");

        out.println("<h1>Hello, World from area-check!</h1>");
        out.println("<p>" + "goida" + x + y + r + "</p>");
        if (checkHit(x,y,r)) {

            out.println("win!");
        } else {
            out.println("lose!");
        }
    }

    private boolean checkHit(String x, String y, String r) {
        double dX = Double.parseDouble(x);
        double dY = Double.parseDouble(y);
        double dR = Double.parseDouble(r);
        double distance = (double) Math.sqrt(dX * dX + dY * dY);

        if (dX == 0 && dY == 0 && dR > 0) {
            return true;
        }
        //квадрат в 4 ч
        if (dX >= 0 && dY <= 0) {
            return (dX <= dR) && (Math.abs(dY) <= dR);
        }
        //полукруг в 3 ч
        if (dX <= 0 && dY <= 0) {
            return distance <= dR;
        }
        //треуг в 2 ч
        if (dX <= 0 && dY >= 0) {
            return (dX <= dR) && (dY <= dR) && (dY <= dR + dX);
        }
        return false;
    }


}
