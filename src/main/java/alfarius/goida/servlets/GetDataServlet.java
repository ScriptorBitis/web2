package alfarius.goida.servlets;

import alfarius.goida.models.Point;
import jakarta.servlet.ServletContext;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.util.ArrayList;

@WebServlet("/data")
public class GetDataServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        ServletContext servletContext = req.getServletContext();
        req.setAttribute("pointArr", getArrFromPoinInContext(servletContext));
        servletContext.getRequestDispatcher("/table.jsp").forward(req,resp);
    }

    private  ArrayList<Point> getArrFromPoinInContext(ServletContext sC) {
        ArrayList<Point> pointArr = (ArrayList<Point>) sC.getAttribute("points");
        if (pointArr != null) {
            return pointArr;
        } else {
            pointArr = new ArrayList<>();
            sC.setAttribute("points", pointArr);
            return pointArr;
        }
    }
}
