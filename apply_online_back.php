<!DOCTYPE html>
<html>
  <head>
    <title>Unique Studio</title>
    <meta charset="utf-8">
    <meta name="keywords" content="联创,华中科技大学,启明学院,学生团队,首页,招新,成果,联系方式" />
    <meta name="discription" content="联创队团是华中科技大学由学生自发组织自主实践自行运营的IT团队" />
    <meta name="discription" content="联创团队网站提供了团队的所有基本信息，包括团队简介，团队作品，团队招新和联系方式" />
    <link rel="stylesheet" type="text/css" href="css/normal_nav.css">
    <link rel="stylesheet" type="text/css" href="css/apply_online.css">
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
	    <li><a href="http://blog.hustunique.com" target="_blank"  class="fir_nav"><span id="no_right">博客</span></a></li>
	  </ul>

	  <div id="bottom_line">
	    <img src="image/home/nav_footer.png">
	  </div>
	</nav>
      </div>
    </header>

    <section>
      <div id="online_form">
	<div id="top">
	</div>
	<div id="middle">
	  <form>
	    <div class="inputs">
	      <div class="left_word">
		<span class="item"><em>* </em> 姓名：</span>
	      </div>
	      <div class="right_input">
		<input class="short" type="text" id="name">
		<span class="tip" id="no_name">该项不能为空</span>
	      </div>
	    </div>
	    
	    <div class="inputs">
	      <div class="left_word">
		<span  class="item">性别：</span>
	      </div>
	      <div class="right_input">
		<input name="sex" checked="true" type="radio" value="男"><span>男</span>
		<input type="radio" value="女" name="sex"><span>女</span>
	      </div>
	    </div>

	    <div class="inputs">
	      <div class="left_word">
		<span class="item"><em>* </em> 院系/年级：</span>
	      </div>
	      <div class="right_input">
		<select class="long" id="school">
		  <option>机械科学与工程学院</option>
		  <option>电气与电子工程学院</option>
		  <option>能源与动力工程学院</option>
		  <option>水电与数学化工程学院</option>
		  <option>电子与信息工程系</option>
		  <option>化学与化工学院</option>
		  <option>公共管理学院</option>
		  <option>人文学院</option>
		  <option>新闻与信息传播学院</option>
		  <option>法学院</option>
		  <option>计算机科学与技术学院</option>
		  <option>材料科学与工程学院</option>
		  <option>控制科学与工程系</option>
		  <option>软件学院</option>
		  <option>建筑与城市规划学院</option>
		  <option>数学与统计学院</option>
		  <option>经济学院</option>
		  <option>哲学系</option>
		  <option>马克思主义学院</option>
		  <option>外国语学院</option>
		  <option>医药卫生管理学院</option>
		  <option>远程与继续教育学院</option>
		  <option>生命与科学技术学院</option>
		  <option>船舶与海洋工程学院</option>
		  <option>光学与电子信息学院</option>
		  <option>环境与科学工程学院</option>
		  <option>土木工程与力学学院</option>
		  <option>物理学院</option>
		  <option>管理学院</option>
		  <option>中文系</option>
		  <option>社会学</option>
		  <option>同济医学院</option>
		</select>

		<select class="short" id="year">
		  <option>2012级</option>
		  <option>2011级</option>
		  <option>2010级</option>
		  <option>2009级</option>
		</select>
		<span class="tip" id="no_school">该项不能为空</span>
	      </div>
	    </div>

	    <div class="inputs">
	      <div class="left_word">
		<span class="item"><em>* </em> 联系电话：</span>

	      </div>
	      <div class="right_input">
		<input class="long" type="text" id="phone">
		<span class="tip" id="no_phone">该项不能为空</span>
		<span class="tip" id="wrong_phone">请输入正确的号码</span>
	      </div>
	    </div>
	    

	     <div class="inputs">
	       <div class="left_word">
		 <span  class="item"><em>* </em> E-mail：</span>
	       </div>
	       <div class="right_input">
		 <input type="email" class="long" id="mail">
		 <span class="tip" id="no_mail">该项不能为空</span>
		 <span class="tip" id="wrong_mail">请输入正确的E-Mail</span>
	       </div>
	     </div>

	      <div class="textareas">
		<div class="left_word">
		  <span class="item">申请职位&理由：</span>
		</div>
		<div class="right_input">
		  <textarea id="box1"></textarea>
		</div>
	     </div>

	       <div class="textareas">
		 <div class="left_word">
		  <span class="item">曾获得的荣誉&奖项：</span>
		</div>
		<div class="right_input">
		  <textarea id="box2"></textarea>
		</div>
	       </div>

	       <div class="textareas">
		 <div class="left_word">
		  <span class="item">对互联网的认识：</span>
		</div>
		<div class="right_input">
		  <textarea id="box3"></textarea>
		</div>	
	       </div>
	       
	       <div class="textareas">
		<div class="left_word">
		  <span class="item">其他：</span>
		</div>
		<div class="right_input">
		  <textarea id="box4"></textarea>
		</div>
	       </div>
	       
	       <div> 
		 <img src="./image/apply/online/button.png" id="submit">
	       </div>
	    
	  </form>
	</div>
	<div id="bottom">
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
    <script type="text/javascript" src="js/apply_online.js"></script>
  <!-- hustunique.com Baidu tongji analytics -->
<script type="text/javascript">
var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://");
document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3F96d46b39837766727c025083f81edc8f' type='text/javascript'%3E%3C/script%3E"));
</script>
</body>
</html>
