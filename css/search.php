<?php
	require_once("linkDataBase.php");
?>


<!DOCTYPE HTML>
<html>
	<head>
	  <meta charset="utf-8">
	  <link rel="stylesheet" type="text/css" href="css/search.css">
	  <link rel="stylesheet" type="text/css" href="css/bootstrap.css">
	</head>
	
	<body>
	    <div id="login">
	    	 <form class="form-horizontal" action="getData.php" method="post">
  		 <fieldset>	       
		  <legend>查看资料</legend>
    		 <div class="control-group">	       
      		 <label class="control-label">用户名</label>
      		 <div class="controls">
        	 <input type="text" name="username" class="input-xlarge" id="input01">
      		 </div>
    		 </div>
    		 <div class="control-group">
      		 <label class="control-label">密码</label>
     		  <div class="controls">
       		   <input type="password" name="password" class="input-xlarge" id="input01">
      		   </div>
		   <button type="submit" id="submit"  class="btn btn-large btn-primary">登录</button>
    </div>
  </fieldset>
</form>
	    </div>
	<!-- hustunique.com Baidu tongji analytics -->
<script type="text/javascript">
var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://");
document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3F96d46b39837766727c025083f81edc8f' type='text/javascript'%3E%3C/script%3E"));
</script>
</body>

</html>
