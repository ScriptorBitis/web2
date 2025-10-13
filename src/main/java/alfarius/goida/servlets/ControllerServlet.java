package alfarius.goida.servlets;


import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletContext;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/check")
public class ControllerServlet extends HttpServlet {
    private static final int[] yValues = new int[]{-4, -3, -2, -1, 0, 1, 2, 3, 4};
    private static final int[] rValues = new int[]{1, 2, 3, 4, 5};

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String x = request.getParameter("x");
        String y = request.getParameter("y");
        String r = request.getParameter("r");

        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        if (checkParams(x, y, r)) {
            RequestDispatcher requestDispatcher = request.getRequestDispatcher("area-check");
            request.setAttribute("x", x);
            request.setAttribute("y", y);
            request.setAttribute("r", r);
            requestDispatcher.forward(request, response);
        } else {
            response.setStatus(400);
            out.println("<p>Smt wrong with params.Dude, please, stop crash my lab...</p>");
        }
    }

    private boolean checkParams(String x, String y, String r) {
        if (x == null || y == null || r == null
                || x.isEmpty() || y.isEmpty() || r.isEmpty()) {
            return false;
        }
        try {
            double doubleX = Double.parseDouble(x);
            double doubleY = Double.parseDouble(y);
            double doubleR = Double.parseDouble(r);
            if (doubleX < -5 || doubleX > 5) {
                return false;
            }
            if (doubleY < -5 || doubleY > 5) {
                return false;
            }
            for (int k : rValues) {
                if (doubleR == k) {
                    return true;
                }
            }
            return false;
        } catch (Exception e) {
            return false;
        }
    }
}
