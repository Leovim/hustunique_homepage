<?php

  function _inte_info($flag, $info){
    return json_encode(array('status' => $flag, 'info' => $info));
  }

  function inte_err_info($info){
    return _inte_info(false, $info);
  }

  function inte_succ_info($info){
    return _inte_info(true, $info);
  }

  function inte_bigerr_info(){
    return _inte_info(false, "Unable Error");
  }

  function verify_not_empty($v){
    return empty($v);
  }

  function verify_phone($p){
    return preg_match('{1[0-9]{10}}', $p) != 0;
  }

  //var_dump(verify_phone('13006352013'));
  //var_dump(verify_phone('1300635201'));

  echo run();

  function run(){

    $sex_arr = array('M', 'F');
    $campus_arr = array('1' => '韵苑', '2' => '沁苑', '3' => '紫崧');
    $group_arr = array('1' => 'Android组', '2' => 'Design组', '3' => 'PM组', '4' => 'Web组', '5' => 'IT组', '6' => '算法组', '7' => '嵌入式组');
    $know_arr = array('1' => '校方宣传', '2' => '使用过团队的产品', '3' => '学长学姐推荐', '4'=>'老师推荐', '5' => '路演、宣讲会', '6' => '海报、宣传单', '7' => '同学朋友介绍', '8' => '其它');

    try{
      $name = trim($_POST['u_name']);
      $sex = trim($_POST['u_sex']);
      $campus = trim($_POST['u_campus']);
      $major = trim($_POST['u_major']);
      $main_phone = trim($_POST['u_main_phone']);
      $standby_phone = trim($_POST['u_standby_phone']);
      $group = trim($_POST['u_group']);
      $intro = trim($_POST['u_intro']);
      $advantage = trim($_POST['u_advantage']);
      $know = trim($_POST['u_know']);
      $know_other = trim($_POST['u_know_other']);

      if(empty($name)) return inte_err_info("姓名输入错误");
      if(!in_array($sex, $sex_arr)) return inte_err_info("性别选择错误");
      if(!in_array($campus, array_keys($campus_arr))) return inte_err_info("所在校区选择错误");
      $campus = $campus_arr[$campus];

      if(empty($major)) return inte_err_info("专业年级非空");
      if(!verify_phone($main_phone)) return inte_err_info("联系电话输入错误");

      $group = $group_arr[$group];
      if(empty($intro)) return inte_err_info("个人介绍填写错误");
      if(empty($advantage)) return inte_err_info("你的优势填写错误");
      if(empty($know)) return inte_err_info("了解团队的方式填写错误");
      $know_info = explode('.', $know);
      $_know_arr_keys = array_keys($know_arr);
      $know_final = array();
      foreach($know_info as $v){
        if(empty($v)) continue;
        if($v == '8'){
          if(empty($know_other)) return inte_err_info("了解团队的方式填写错误");
          else array_push($know_final, $know_other);
        }elseif(in_array($v, $_know_arr_keys)) array_push($know_final, $know_arr[$v]);
      }
      var_dump($know_final);
      if(empty($know_final)) return inte_err_info("了解团队的方式填写错误");

      $name = mysql_escape_string($name);
      $sex = mysql_escape_string($sex);
      $campus = mysql_escape_string($campus);
      $major = mysql_escape_string($major);
      $main_phone = mysql_escape_string($main_phone);
      $standby_phone = mysql_escape_string($standby_phone);
      $group = mysql_escape_string($group);
      $intro = mysql_escape_string($intro);
      $advantage = mysql_escape_string($advantage);
      $know = mysql_escape_string(implode('.', $know_final));

      $sql = "INSERT INTO `ash_member_applicants`(`name`, `sex`, `campus`, `major`, `main_phone`, `standby_phone`, `group_name`, `intro`, `advantage`, `know`) VALUES ('$name', '$sex', '$campus', '$major', '$main_phone', '$standby_phone', '$group', '$intro', '$advantage', '$know')";

      require_once("linkDataBase.php");

      if(mysql_query($sql, $con)) return inte_succ_info("你已参加本次联创团队招新，请等候面试通知");
      return inte_err_info("Unable Error");

    }catch(Exception $e){
      return inte_err_info("Unable Error");
    }
  }


  //写入数据库即可
  //if(mysql_query("INSERT INTO new (name,sex,school,year,phone,mail,reason,award,internet,others) VALUES ('$name','$sex','$school','$year','$phone','$mail','$text1','$text2','$text3','$text4')"))
  //{
    //echo "你已参加本次联创团队招新，请等候面试通知";
  //}
  //else
  //{
    //echo "something bad happened!";
  //}

?>
