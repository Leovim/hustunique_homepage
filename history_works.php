<?php
   require_once("linkDataBase.php");
   if(isset($_GET["type"]))
   {
      $type = $_GET["type"];
   }
   else
      $type = 1;
   switch($type)
   {
     case 1 : $fileName = "ic";break;
     case 2 : $fileName = "web";break;
     case 3 : $fileName = "andriod";break;
     case 4 : $fileName = "design";break;
     case 5 : $fileName = "others";break;
   }
?>


<!DOCTYPE html>
<html>
  <head>
    <title>Unique Studio</title>
    <meta charset="utf-8">
    <meta name="keywords" content="联创,华中科技大学,启明学院,学生团队,首页,招新,成果,联系方式" />
    <meta name="discription" content="联创队团是华中科技大学由学生自发组织自主实践自行运营的IT团队" />
    <meta name="discription" content="联创团队网站提供了团队的所有基本信息，包括团队简介，团队作品，团队招新和联系方式" />
    <link rel="stylesheet" type="text/css" href="css/normal_nav.css">
    <link rel="stylesheet" type="text/css" href="css/history_works.css">
  </head>

<body>
		<?php require "header.php" ?>
    <section>
      <div id="history">
        <div id="tags">
	 <a href="history_works.php?type=1"><span class="tag" id="type1" key="1">I C</span></a>
	 <a href="history_works.php?type=2"><span class="tag" id="type2" key="2">Web</span></a>
	 <a href="history_works.php?type=3"><span class="tag" id="type3" key="3">Andriod</span></a>
	 <a href="history_works.php?type=4"><span class="tag" id="type4" key="4">Design</span></a>
	 <a href="history_works.php?type=5"><span class="tag" id="type5" key="5">others</span></a>
	</div>

	<div id="content">
	   <?php
	     $count = 0;
	     $result = mysql_query(mysql_real_escape_string("SELECT * FROM works where type=$type"));
	     while($row = mysql_fetch_array($result))
	     {
	        $count++;
	        $name = $row["name"];
	        $word = $row["word"];
	        $src = $row["src"];
	        echo "<div class='frame'>";
	        echo "<div class='left_frame'>";
	        echo "</div>";
	        echo "<div class='middle_frame'>";
	        echo "</div>";
	        echo "<div class='right_frame'>";
	        echo "</div>";
		echo "<div class='bgt'>";
		echo "<p class='workTitle'>作品名称: ".$name."</p>";
		echo "<span class='workTitle'>作品介绍： </span>";
		echo "<p class='workIntro'>".$word."</p>";
		echo "</div>";
		if($type==3 && ($count==5 || $count==9))
	       	{
		   echo "<img src='image/product/history/product/".$fileName."/".$src.".png'>";
		}
		else
		{
		   echo "<img src='image/product/history/product/".$fileName."/".$src.".jpg'>";
	        }
	
		echo "</div>";
	     }
	  ?>
	  </div>

      </div>
    </section>

    <footer>
      <div id="copyright_link">
       <div id="copyright">
	 <p>©Copyright 2012 Unique Studio All Rights Reserved.</p>
      </div>
      <div id="link_logo">
	<a href="http://page.renren.com/601317380" target="_blank"><img id="renren" src="./image/home/renren_logo.png"></a>
	<a href="http://weibo.com/uniquestudio" target="_blank"><img id="weibo" src="./image/home/weibo_logo.png"></a>
      </div>
      </div>

    </footer>

      <script type="text/javascript" src="js/jquery.js"></script>
      <script type="text/javascript" src="js/history_works.js"></script>
<!-- hustunique.com Baidu tongji analytics -->
<script type="text/javascript">
var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://");
document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3F96d46b39837766727c025083f81edc8f' type='text/javascript'%3E%3C/script%3E"));
</script>
</body>
</html>
