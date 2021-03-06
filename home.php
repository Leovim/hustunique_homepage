<!DOCTYPE html>
<html>
  <head>
    <title>Unique Studio</title>
    <meta charset="utf-8">
    <meta name="keywords" content="联创,华中科技大学,启明学院,学生团队,首页,招新,成果,联系方式" />
    <meta name="discription" content="联创队团是华中科技大学由学生自发组织自主实践自行运营的IT团队" />
    <meta name="discription" content="联创团队网站提供了团队的所有基本信息，包括团队简介，团队作品，团队招新和联系方式" />
    <link rel="stylesheet" type="text/css" href="css/normal_nav.css">
    <link rel="stylesheet" type="text/css" href="css/home.css">
  </head>

  <body>
    <?php require "header.php" ?>
    <section>
    <div id="gallery">
      <img src="./image/home/hang.png" id="hang_left">
      <img src="./image/home/hang.png" id="hang_right">
      <img src="./image/home/left.png" id="turn_left">
      <img src="./image/home/right.png" id="turn_right">

      <div id="gallery_back">
        <div id="holder">
          <a href="http://hacks.hustunique.com" target="_blank"><img src="./image/home/hackday.jpg" alt="1"></a>
          <a href="https://play.google.com/store/apps/details?id=com.hustunique.mobileguard" ><img src="./image/home/within.jpg" alt="2"></a>
          <a href="http://atsgame.com"><img src="./image/home/panpan.jpg" alt="3"></a>
          <a href="http://www.fuubo.me"><img src="./image/home/fuubo.jpg" alt="4"></a>
          <a href="https://play.google.com/store/apps/details?id=com.hustunique.tuudo"><img src="./image/home/tuudo.jpg" alt="5"></a>
          <a href="#"><img src="./image/home/oneday.jpg" alt="6"></a>
        </div>
      </div>


      <div id="gallery_left">
        <img src="./image/home/gallery_left.png">
      </div>
      <div id="gallery_middle">
      </div>
      <div id="gallery_right">
        <img src="./image/home/gallery_right.png">
      </div>
      <div id="change_buttons">
        <div class="buttons" id="pic1" key="1">
        </div>
        <div class="buttons" id="pic2" key="2">
        </div>
        <div class="buttons" id="pic3" key="3">
        </div>
        <div class="buttons" id="pic4" key="4">
        </div>
        <div class="buttons" id="pic5" key="5">
        </div>
        <div class="buttons" id="pic6" key="6">
        </div>
      </div>
      <div id="gallery_shadow">
        <img src="./image/home/gallery_shadow.png">
      </div>
    </div>

    <div id="unique_intro">
      <p>联创团队是华中科技大学一个以兴趣为主导、强调主动实践和自主创新，由学生自发组织、自我管理的学生IT团队。
      </p>
      <img id="separation_line" src="./image/home/separation_line.png">
    </div>

    <div id="unique_project">
      <div class="sub_project">
        <div class="pro_logo" id="match">
          <div class="logo_contain" id="logo_match">
            <img src="./image/home/match.png" alt="match">
            <img src="./image/home/match.png" alt="match" id="match2">
          </div>
        </div>
        <div class="des_div" id="matchDiv">
          <p class="describe">
          团队创立之初，以参加微软创新杯大赛为主，软件设计组曾多次进入全球决赛、两次获得IT挑战项目全球第一的好成绩。近年来，团队所参加的比赛开始多元化，在腾讯校园之星、HTML5创新大赛以及有道、Google组织的比赛中均有优异表现。在刚刚结束的腾讯HTML5创新大赛中获得了全国冠军。
          </p>
        </div>
      </div>

      <div class="sub_project">
        <div class="pro_logo" id="product">
          <div class="logo_contain" id="logo_product">
            <img src="./image/home/product.png" alt="product">
            <img src="./image/home/product.png" alt="product" id="product2">
          </div>
        </div>
        <div class="des_div" id="productDiv">
          <p class="describe">
          近年来，团队重心逐渐向产品开发偏移。在过去的一年中推出了LBS应用 一块去、Android和WP上小游戏 淘气的贴纸、网页版记事工具 Memomeme、离线微博应用fuubo、代办事项应用tuudo、欧洲杯赛程服务euuro等产品，在市场和用户那均取得不错的反响。 
          </p>
        </div>
      </div>

      <div class="sub_project">
        <div class="pro_logo" id="outsourcing">
          <div class="logo_contain" id="logo_outsourcing">
            <img src="./image/home/outsourcing.png" alt="outsourcing">
            <img src="./image/home/outsourcing.png" alt="outsourcing" id="outsourcing2">
          </div>
        </div>
        <div class="des_div" id="outsourcingDiv">
          <p class="describe">
          团队秉承合作共赢的理念，与众多企业建立良好关系，并承接外包项目，比如为某公司制作的车辆交易信息发布平台，为国外某实验室建立了人员关系管理系统等等，都达到了客户、团队均满意的双赢的结果。
          </p>
        </div>
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
    <script type="text/javascript" src="js/home.js"></script>

    <!-- hustunique.com Baidu tongji analytics -->
    <script type="text/javascript">
      var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://");
      document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3F96d46b39837766727c025083f81edc8f' type='text/javascript'%3E%3C/script%3E"));
    </script>
  </body>
</html>
