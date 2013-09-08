$("#submit").bind("click",submit);

function submit(){
  $(".tip").css("display","none");
  var name = document.getElementById("name").value;
  var sex = GetRadioValue("sex");
  var campus = GetRadioValue("campus");
  var major = document.getElementById("major").value;
  var phone = document.getElementById("phone").value;
  var standby_phone = document.getElementById("standby_phone").value;
  var group = GetRadioValue("group");
  var text1 = document.getElementById("box1").value;
  var text2 = document.getElementById("box2").value;
  var know = otherCheck();
  if (document.getElementById("other-text").value) {
    var know_other = document.getElementById("other-text").value;
  }
  else {
    var know_other = "";
  }
  if((name=="")||(major=="")||(phone=="")||(phone!="" && checkPhone(phone)==false)||(standby_phone!="" && checkPhone(standby_phone)==false)||(text1=="")||(text2==""))
  {
    if(name=="")
    {
      $("#no_name").css("display","inline-block");
      $('body,html').animate({scrollTop:0},500);
    }
    if(major=="")
    {
      $("#no_major").css("display","inline-block");
      $('body,html').animate({scrollTop:0},500);
    }
    if(phone=="")
    {
      $("#no_phone").css("display","inline-block");
      $('body,html').animate({scrollTop:0},500);
    }
    if(standby_phone=="")
    {
      $("#no_standby_phone").css("display","inline-block");
      $('body,html').animate({scrollTop:0},500);
    }
    if(standby_phone=="")
    {
      $("#no_standby_phone").css("display","inline-block");
      $('body,html').animate({scrollTop:0},500);
    }
    if(phone!="" && checkPhone(phone)==false)
    {
      $("#wrong_phone").css("display","inline-block");
      $('body,html').animate({scrollTop:0},500);
    }
    if(standby_phone!="" && checkPhone(standby_phone)==false)
    {
      $("#wrong_standby_phone").css("display","inline-block");
      $('body,html').animate({scrollTop:0},500);
    }
    if(text1=="")
    {
      $("#no_text1").css("display","inline-block");
      $('body,html').animate({scrollTop:0},500);
    }
    if(text2=="")
    {
      $("#no_text2").css("display","inline-block");
      $('body,html').animate({scrollTop:0},500);
    }
  }
  else
  {
    //ajax传输
    var  xmlhttp;	
    //var url="addInDB.php?name="+name+"&sex="+sex+"&school="+school+"&year="+year+"&phone="+phone+"&mail="+mail+"&text1="+text1+"&text2="+text2+"&text3="+text3+"&text4="+text4;
    if (window.XMLHttpRequest)
      {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
      }
      else
      {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
      }
      xmlhttp.onreadystatechange=function()
      {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
          result = eval('(' + xmlhttp.responseText + ')');
          if(result.status === true){
            alert(result.info);
            window.location.href = "home.php";
          }else{
              alert(result.info);
          }
        }
      }

      xmlhttp.open("POST","addInDB.php",true);
      xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
      xmlhttp.send("u_name="+name+"&u_sex="+sex+"&u_campus="+campus+"&u_major="+major+"&u_main_phone="+phone+"&u_standby_phone="+standby_phone+"&u_group="+group+"&u_intro="+text1+"&u_advantage="+text2+"&u_know="+know+"&u_know_other="+know_other);
      //xmlhttp.send();
  }
}

function checkPhone(tel)
{
  if(!(/^1[3|4|5|8][0-9]\d{8}$/.test(tel))){
    return false
  } 
  return true; 
} 

/* function checkMail(str)
{
  var mailArray;  
  var patterns = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/; 
  mailArray=str.split(",");
  for(i=0;i<mailArray.length;i++)
  {
    if(patterns.test(mailArray[i]))//邮件地址符合
    {
      //alert(str+",邮件地址格式正确！");
      return true;
    }
    else   //邮件地址不符合
    {   
      return false;
    }
  }
} */

function GetRadioValue(RadioName) {
  var obj;    
  obj=document.getElementsByName(RadioName);
  if(obj!=null){
    var i;
    for(i=0;i<obj.length;i++){
      if(obj[i].checked){
        return obj[i].value;            
      }
    }
  }
  return null;
}

function otherCheck(){
  var other_text = "";
  for (var i = 1; i < 8; i++) {
    if (document.getElementById("other" + i).checked) {
      other_text += i + ".";
    };
  };
  return other_text;
}

$("#name").click(function(){
  $("#no_name").css("display","none");
});

$("#phone").click(function(){
  $("#no_phone").css("display","none");
  $("#wrong_phone").css("display","none");
});

$("#standby_phone").click(function(){
  $("#no_standby_phone").css("display","none");
  $("#wrong_standby_phone").css("display","none");
});

$("#other").click(function() {
  if (!document.getElementById("other-text").disabled) {
    document.getElementById("other-text").value = "";
    document.getElementById("other-text").disabled = true;
  }
  else {
    document.getElementById("other-text").disabled = false;
  }
});

$(document).ready(function (e) {
  if (!document.getElementById("other").checked) {
    document.getElementById("other-text").disabled = true;
  };
});
