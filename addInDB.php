<?php
    require_once("linkDataBase.php");
    $name = $_POST['name'];
    $sex = $_POST['sex'];
    $school = $_POST['school'];
    $year = $_POST['year'];
    $phone = $_POST['phone'];
    $mail = $_POST['mail'];
    $text1 = $_POST['text1'];
    $text2 = $_POST['text2'];
    $text3 = $_POST['text3'];
    $text4 = $_POST['text4'];
    $create_time = date("Y-m-d",time());

    
    //写入数据库即可
    if(mysql_query("INSERT INTO new (name,sex,school,year,phone,mail,reason,award,internet,others) VALUES ('$name','$sex','$school','$year','$phone','$mail','$text1','$text2','$text3','$text4')"))
    {
       echo "你已参加本次联创团队招新，请等候面试通知";
    }
    else
    {
	echo "something bad happened!";
    }   
    
?>	
    
