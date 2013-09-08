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
        echo "<th>手机</th>";
	echo "</tr>";
	echo "</thead>";
	echo "<tbody>";

	$new = mysql_query("select * from new");
	while($newRow = mysql_fetch_array($new))
	{
	    echo "<tr>";	
	    echo "<th>".$newRow["name"]."</th>";
   
            if(strcmp($newRow["sex"],"man")==0)
            {
                 $newRow["sex"] = "男";
            }
            if(strcmp($newRow["sex"],"woma")==0)
            {
                 $newRow["sex"] = "女";
            }
	    echo "<th>".$newRow["sex"]."</th>";
	    echo "<th>".$newRow["school"]."</th>";
	    echo "<th>".$newRow["year"]."</th>";
            echo "<th>".$newRow["phone"]."</th>";
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
