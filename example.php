<!DOCTYPE html>
<html>
<head>
    <?php header("Content-Type:text/html; charset=' . utf-8 . '");?>
    <title>深圳市宇初网络技术有限公司验证码实例</title>
</head>
<body>

<div style="height: 100px;"></div>
<?php
include(dirname(__FILE__) . '/YucCaptcha.php');
$value = YucCaptcha::context('yucinputba88e0aa80');
if ($value != null) {
    echo "开始验证：";
    $ret = YucCaptcha::getVerifyResult();
    if ($ret) {
        echo '成功！';
    }
} else {
    echo "验证码：";
    echo YucCaptcha::getDetails();
}
?>

<div style="display: block;">
    <form action="example.php" method="post">
        <script type="text/javascript"
                src="http://serv.yucmedia.com/request.php?site_key=0A3FF05789295B03ABC1BDA03EB8809A&adl=js"></script>
        <input type="text" id="yucinputba88e0aa80" name="yucinputba88e0aa80" value=""/>
        <input type="submit" value="验证"/>
    </form>
</div>
</body>
</html>
