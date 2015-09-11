<%-- 
    Document   : index
    Created on : 26-mar-2015, 9:03:41
    Author     : david
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>

<%@ page import="java.io.*"  %>
<%@ page import="java.util.*"  %>
<%@ page import="java.text.*"  %>
<%@ page import="org.apache.log4j.*"  %>
<%@ page import="org.apache.log4j.PropertyConfigurator"  %>



<%

String str = request.getParameter("osmdxaction");

//SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss.SSS");
DateFormat dateFormatLog = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
DateFormat dateFormatFile = new SimpleDateFormat("yyyy-MM-dd");
Date date = new Date();

//always give the path from root. This way it almost always works.
String nameOfTextFile = "/SmallHDD02/pentaho/biserver-ce/tomcat/logs/os-user-actions-" + dateFormatFile.format(date) + ".log";
try {
                
    PrintWriter pw = new PrintWriter(new FileOutputStream(nameOfTextFile, true));
    pw.println(dateFormatLog.format(date)+ ": " + str);
    //clean up
    pw.close();
} catch(IOException e) {
   out.println(e.getMessage());
}
%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
    </body>
</html>
