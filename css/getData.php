<!DOCTYPE HTML>
<html>
    <head>
	<link rel="stylesheet" type="text/css" href="css/bootstrap.css">
    </head> 
    <body>
<?php
   require_once("linkDataBase.php");
   
   $name = $_POST["username"];
   $password = md5($_POST["password"]);

   $result = mysql_query("select * from search");
   $row =  mysql_fetch_array($result);
   
   if(strcmp($name,$row["name"])!=0 || strcmp($password,$row["password"])!=0)
   {
        //登录错误
   	echo "登录信息错误";

   }
   else
   {
	//登录成功
	echo "<div id='info'>";
	echo "<table class='table table-striped table-bordered table-condensed'>";
	echo "<thead>";
	echo "<tr>";
	echo "<th>姓名</th>";
	echo "<th>性别</th>";
	echo "<th>院系</th>";
	echo "<th>年级</th>";
	echo "<th>申报组别和理由</th>";
	echo "<th>曾获奖项</th>";
	echo "<th>对互联网的认识</th>";
	echo "<th>其他</th>";
	echo "</tr>";
	echo "</thead>";
	echo "<tbody>";

	$new = mysql_query("select * from new");
	while($newRow = mysql_fetch_array($new))
	{
	    echo "<tr>";	
	    echo "<th>".$newRow["name"]."</th>";
	    echo "<th>".$newRow["sex"]."</th>";
	    echo "<th>".$newRow["school"]."</th>";
	    echo "<th>".$newRow["year"]."</th>";
	    echo "<th>".$newRow["reason"]."</th>";
	    echo "<th>".$newRow["award"]."</th>";
	    echo "<th>".$newRow["internet"]."</th>";
	    echo "<th>".$newRow["others"]."</th>";	
	    echo "</tr>";	
	}

	echo "</tbody>";
	echo "<table>";
	echo "</div>";
   }	
?>

    <!-- hustunique.com Baidu tongji analytics -->
<script type="text/javascript">
var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://");
document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3F96d46b39837766727c025083f81edc8f' type='text/javascript'%3E%3C/script%3E"));
</script>
</body>
</html>
