package alfarius.goida.models;

import java.util.Date;

public class Point {
    private double x;
    private double y;
    private int r;
    private long executionTime;
    private boolean hitStatus;

    public Point(double x, double y, int r, long executionTime, boolean hitStatus) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.executionTime = executionTime;
        this.hitStatus = hitStatus;
    }

    public Point(double x, double y, int r) {
        this.x = x;
        this.y = y;
        this.r = r;
    }
    public Point(String x, String y, String r) {
        this.x = Double.parseDouble(x);
        this.y = Double.parseDouble(y);
        this.r = Integer.parseInt(r);
    }

    public Point() {
    }

    public void setX(double x) {
        this.x = x;
    }

    public void setY(double y) {
        this.y = y;
    }

    public void setR(int r) {
        this.r = r;
    }

    public void setExecutionTime(long executionTime) {
        this.executionTime = executionTime;
    }

    public void setHitStatus(boolean hitStatus) {
        this.hitStatus = hitStatus;
    }

    public double getX() {
        return x;
    }

    public double getY() {
        return y;
    }

    public int getR() {
        return r;
    }

    public long getExecutionTime() {
        return executionTime;
    }

    public boolean isHitStatus() {
        return hitStatus;
    }

    @Override
    public String toString() {
        return "Point{" +
                "x=" + x +
                ", y=" + y +
                ", r=" + r +
                ", executionTime=" + executionTime +
                ", hitStatus=" + hitStatus +
                '}';
    }
}
