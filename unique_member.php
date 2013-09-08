<?php
   require_once("linkDataBase.php");
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
    <link rel="stylesheet" type="text/css" href="css/unique_member.css">
  </head>

  <body>
    <header>
      <div id="logo_nav">
	<div id="left_logo">
	  <a href="home.html">
	    <img src="image/home/logo.png">
	  </a>
	</div>
	<nav id="right_nav">
	  <ul>
	    <li><a href="home.html" class="fir_nav"><span id="no_left">首页</span></a></li>
	    <li><a href="#" class="fir_nav"><span>关于联创</span></a>
	      <ul>
		 <li><a href="unique_intro.html"><span>团队介绍</span></a></li>
		 <li><a href="unique_group.html"><span>各组介绍</span></a></li>
		 <li><a href="unique_member.php"><span>团队成员</span></a></li>
		 <li><a href="unique_event.html"><span>大事记</span></a></li>
	      </ul>
	    </li>
	    <li><a href="#" class="fir_nav"><span>招新</span></a>
	      <ul>
		 <li><a href="apply_affair.php"><span>招新事宜</span></a></li>
		 <li><a href="apply_online.php"><span>在线报名</span></a></li>
	      </ul>
	    </li>
	    <li><a href="#"class="fir_nav"><span>成果</span></a>
	      <ul>
		  <li><a href="recent_works.html"><span>近期作品</span></a></li>
		  <li><a href="history_works.php"><span>历史作品</span></a></li>
	      </ul>
	    </li>
	    <li><a href="contact.php" class="fir_nav"><span>联系我们</span></a></li>
	    <li><a href="http://blog.hustunique.com" target="_blank" class="fir_nav"><span id="no_right">博客</span></a></li>
	  </ul>

	  <div id="bottom_line">
	    <img src="image/home/nav_footer.png">
	  </div>
	</nav>
      </div>
    </header>

    <section>
      <div id="main">
          	<?php
	   $count = 0;
	   $result = mysql_query("SELECT * FROM members");
	   while($row = mysql_fetch_array($result))
	   {
	      $count++;
	      $name = $row['name'];
	      $job1 = $row['job'];
	      switch($job1)
	      {  //组别对应
	          case 1:$job = "Web";break;
		  case 2:$job = "Android";break;
		  case 3:$job = "Design";break;
		  case 4:$job = "PM";break;
		  case 5:$job = "算法组";break;
		  case 6:$job = "嵌入式组";break;
		  case 7:$job = "IT";break;
	      }      
	      $renren = "http://www.renren.com/".$row['renren'];
	      $weibo = "http://www.weibo.com/u/".$row['weibo'];
	      $word = $row['word'];
	      $schoolNum = (int)$row['school'];
	      switch($schoolNum)
	      {  //学院对应
	          case 1:$school = "机械学院";break;
		  case 2:$school = "计算机学院";break;
		  case 3:$school = "外国语学院";break;
		  case 4:$school = "光电学院";break;
		  case 5:$school = "电信系";break;
		  case 6:$school = "软件学院";break;
		  case 7:$school = "控制系";break;
		  case 8:$school = "管理学院";break;
		  case 9:$school = "电气学院";break;
		  case 10:$school = "环境学院";break;
		  case 11:$school = "数学学院";break;
		  case 12:$school = "材料学院";break;
	      	  case 13:$school = "法学院";break;
		  default:$school = "";
	      }
	       if($count==17)
	       {//family tree
	          echo "<div class='frame'>";
	          echo "<a target='_blank' href='http://intra.hustunique.com/familytree'><img src='./image/about/member/members/familytree.png'></a>";
	          echo "</div>";
		  $count++;
	       }
	           if($row['src']==24 || $row['src']==6 || $row['src']==34)
	           {
	                $src = "image/about/member/members/".(string)$row['src'].".jpg";
	           }
	           else
	           {
                       $src = "image/about/member/members/".(string)$row['src'].".png";
                   }
	           if(($count%7)<=4 && ($count%7)!=0)
	           {
	              //左边部分将会向右弹出
	             echo "<div class='frame'>";
	             echo "<img class='leftImg' src=".$src.">";	      
        	     echo "<div class='llayer'>";
		     echo "<div class='line_div'><hr></div>";
		     echo "<p class='member_name'>".$name;
		     echo "<span class='member_school'>".$school."</span>";
		     echo "</p>";
		     echo "<span class='member_job'>·".$job."·</span>";
		     echo "<p class='own_word'>".$word."</p>";
		     if($row['renren']!="")
		     {
		     echo "<a target='_blank' href=".$renren."><img class='renren_img' src='./image/contact/renren_logo.png'></a>";
		     }
		     if($row['weibo']!="")
		     {
		     echo "<a target='_blank' href=".$weibo."><img class='weibo_img' src='./image/contact/weibo_logo.png'></a>";
		     }
		     echo "</div>"; 
		     echo "</div>";
	      	   }
	      	   else
               	   {
			//右边部分将会向左弹出
	          	echo "<div class='frame'>";
	          	echo "<img class='rightImg' src=".$src.">";
			echo "<div class='rlayer'>";
			echo "<div class='line_div'><hr></div>";
		     	echo "<p class='member_name'>".$name;	
		     	echo "<span class='member_school'>".$school."</span>";
		     	echo "</p>";
		     	echo "<span class='member_job'>·".$job."·</span>";
		     	echo "<p class='own_word'>".$word."</p>";
		        if($row['renren']!="")
		        {
		          echo "<a target='_blank' href=".$renren."><img class='renren_img' src='./image/contact/renren_logo.png'></a>";
		        }
		        if($row['weibo']!="")
		        {
		          echo "<a target='_blank' href=".$weibo."><img class='weibo_img' src='./image/contact/weibo_logo.png'></a>";
		        }
			echo "</div>";	
		  	echo "</div>";
	       	   }
	       
	    }
	        //you
	       echo "<a target='_blank' href='apply_online.php'><div class='frame' id='you'>";
	       echo "<span>YOU</span>";
	       echo "</div></a>";
	?>


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
    <script type="text/javascript" src="js/unique_member.js"></script>
  <!-- hustunique.com Baidu tongji analytics -->
<script type="text/javascript">
var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://");
document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3F96d46b39837766727c025083f81edc8f' type='text/javascript'%3E%3C/script%3E"));
</script>
</body>
</html>