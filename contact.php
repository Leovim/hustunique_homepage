<!DOCTYPE html>
<html>
  <head>
    <title>Unique Studio</title>
    <meta charset="utf-8">
    <meta name="keywords" content="联创,华中科技大学,启明学院,学生团队,首页,招新,成果,联系方式" />
    <meta name="discription" content="联创队团是华中科技大学由学生自发组织自主实践自行运营的IT团队" />
    <meta name="discription" content="联创团队网站提供了团队的所有基本信息，包括团队简介，团队作品，团队招新和联系方式" />
    <link rel="stylesheet" type="text/css" href="css/normal_nav.css">
    <link rel="stylesheet" type="text/css" href="css/contact.css">
  </head> 

  <body>
	<?php require "header.php" ?>
    <section>
      <div id="main">
	<div id="infor_collection">
	  <div id="information">
	    <div class="infor">
	      <div class="infor_logo">
		<img src="./image/contact/address.png">
	      </div>
	      <div class="infor_detail">
		 <span>中国湖北省武汉市洪山区珞瑜路1037号</span>
		 <br>
		 <span>华中科技大学启明学院亮胜楼8楼</span>
	      </div>
	    </div>
	    <div class="infor">
	      <div class="infor_logo">
		<img src="./image/contact/mail.png">
	      </div>
	       <div class="infor_detail">
		 <span>E-mail：hr@hustunique.com<span>
	      </div>
	    </div>
	    <div class="infor">
	      <div class="infor_logo">
		<img src="./image/contact/tel.png">
	      </div>
	       <div class="infor_detail" id="telphone">
		 <span>电话：13163260252</span>
	      </div>
	    </div>
	  </div>
	  
	  <!--看这里！！！-->
	  <div id="collection">
	    <form name="contact" method="post" action="send_email.php">
	      <input placeholder="Your Name" type="text" id="name" name = "name">
	      <input placeholder="Your Subject" type="text" id="subject" name = "subject">
	      <input placeholder="Your Email" type="text" id="email" name = "email">
	      <textarea placeholder="Your Message" id="message" name="message"></textarea>
	      <div id="submitDiv">
		<input type ="submit" id="submit" value="">
	      </div>
	    </form>
	  </div>
	  <!--看这里！！！submit -->
	</div>
	<div id="contact_code">
	  <p id="first_line">if wanna_join_us() or do_business() or have_questions() or have_suggestion()</p>
	  <p id="sec_line">switch(choice:)</p>
	  <p class="choice">1:send_e-mail <span id="Hemail">HR@HUSTUNIQUE.COM</span>();break;</p>
	  <p class="choice">2:contact_with: <span><a href="http://weibo.com/uniquestudio" target="_blank"><img src="./image/contact/weibo_logo.png"></a></span> _();break;</p>
	  <p class="choice">3:contact_with: <span><a href="http://page.renren.com/601317380" target="_blank"><img src="./image/contact/renren_logo.png"></a></span> _();break;</p>
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
    <script type="text/javascript" src="js/contact.js"></script>
    <!-- hustunique.com Baidu tongji analytics -->
<script type="text/javascript">
var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://");
document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3F96d46b39837766727c025083f81edc8f' type='text/javascript'%3E%3C/script%3E"));
</script>
</body>
</html>
