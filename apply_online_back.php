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
              <span class="item"> 姓名：</span>
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
              <input name="sex" checked="true" type="radio" value="F"><span>男</span>
              <input type="radio" value="M" name="sex"><span>女</span>
            </div>
          </div>
          <div class="inputs">
            <div class="left_word">
              <span  class="item"> 所在校区：</span>
            </div>
            <div class="right_input">
              <input checked="true" type="radio" value="1" name="campus"><span>韵苑</span>
              <input type="radio" value="2" name="campus"><span>沁苑</span>
              <input type="radio" value="3" name="campus"><span>紫菘</span>
            </div>
          </div>
          <div class="inputs">
            <div class="left_word">
              <span class="item"> 专业年级：</span>
            </div>
            <div class="right_input">
              <input class="long" type="text" id="major" placeholder=" 如：软件工程13级">
              <span class="tip" id="no_major">该项不能为空</span>
            </div>
          </div>

          <div class="inputs">
            <div class="left_word">
              <span class="item"> 联系电话：</span>

            </div>
            <div class="right_input">
              <input class="long" type="text" id="phone">
              <span class="tip" id="no_phone">该项不能为空</span>
              <span class="tip" id="wrong_phone">请输入正确的号码</span>
            </div>
          </div>

          <div class="inputs">
            <div class="left_word">
              <span  class="item"> 备用电话：</span>
            </div>
            <div class="right_input">
              <input type="text" class="long" placeholder=" 如： 舍友电话" id="standby_phone">
              <span class="tip" id="no_standby_phone">该项不能为空</span>
              <span class="tip" id="wrong_standby_phone">请输入正确的电话号码</span>
            </div>
          </div>

          <div class="group-input">
            <div class="left_word">
              <span  class="item"> 报名组别：</span>
            </div>
            <div class="right_input">
              <ul>
                <li class="group-select">
                <input checked="true" type="radio" value="4" name="group"><span>Web 组</span>
                </li>
                <li class="group-select">
                <input type="radio" value="1" name="group"><span>Android 组</span>
                </li>
                <li class="group-select">
                <input type="radio" value="2" name="group"><span>Design 组</span>
                </li>
                <li class="group-select">
                <input type="radio" value="3" name="group"><span>PM 组</span>
                </li>
                <li class="group-select">
                <input type="radio" value="5" name="group"><span>IT 组</span>
                </li>
                <li class="group-select">
                <input type="radio" value="6" name="group"><span>算法组</span>
                </li>
                <li class="group-select">
                <input type="radio" value="7" name="group"><span>嵌入式组</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="textareas">
            <div class="left_word">
              <span class="item"> 个人介绍：</span>
            </div>
            <div class="right_input">
              <textarea id="box1"></textarea>
              <span class="tip" id="no_text1">该项不能为空</span>
            </div>
          </div>

          <div class="textareas">
            <div class="left_word">
              <span class="item"> 你的优势：</span>
            </div>
            <div class="right_input">
              <textarea id="box2" placeholder=" 简单描述"></textarea>
              <span class="tip" id="no_text2">该项不能为空</span>
            </div>
          </div>

          <div class="inputs">
            <div class="left_word">
              <span class="item">你是通过哪种渠道了解我们团队的？（多选）</span>
            </div>
            <div class="right_input">
              <ul>
                <li class="ways"><input type="checkbox" id="other1" name="way" value="1" /> 校方宣传</li>
                <li class="ways"><input type="checkbox" id="other2" name="way" value="2" /> 使用过团队的产品</li>
                <li class="ways"><input type="checkbox" id="other3" name="way" value="3" /> 学长学姐推荐</li>
                <li class="ways"><input type="checkbox" id="other4" name="way" value="4" /> 老师推荐</li>
                <li class="ways"><input type="checkbox" id="other5" name="way" value="5" /> 路演、宣讲会</li>
                <li class="ways"><input type="checkbox" id="other6" name="way" value="6" /> 海报、宣传单</li>
                <li class="ways"><input type="checkbox" id="other7" name="way" value="7" /> 同学介绍</li>
                <li id="other-select" class="ways"><input id="other" type="checkbox" id="check" value="" /> 其他 
                <input type="text" class="long" id="other-text" value="" />
                </li>
              </ul>
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
