$("#submit").bind("click",submit);

function submit(){
    $(".tip").css("display","none");
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var mail = document.getElementById("mail").value;
    var school = document.getElementById("school").value;
    var year = document.getElementById("year").value;
    var sex = GetRadioValue("sex");
    var text1 = document.getElementById("box1").value;
    var text2 = document.getElementById("box2").value;
    var text3 = document.getElementById("box3").value;
    var text4 = document.getElementById("box4").value;
    if((name=="")||(phone=="")||(mail=="")||(phone!="" && checkPhone(phone)==false)||(mail!="" && checkMail(mail)==false))
	{
	if(name=="")
	   {
	       $("#no_name").css("display","inline-block");
	       $('body,html').animate({scrollTop:0},500);
	   }
	   if(phone=="")
	   {
	       $("#no_phone").css("display","inline-block");
	       $('body,html').animate({scrollTop:0},500);
	   }
	   if(mail=="")
	   {
	       $("#no_mail").css("display","inline-block");
	       $('body,html').animate({scrollTop:0},500);	
	   }
	   if(phone!="" && checkPhone(phone)==false)
	   {
	       $("#wrong_phone").css("display","inline-block");
	       $('body,html').animate({scrollTop:0},500);
	   }
	   if(mail!="" && checkMail(mail)==false)
	   {
	       $("#wrong_mail").css("display","inline-block");
	       $('body,html').animate({scrollTop:0},500);
	   }}
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
		alert(xmlhttp.responseText);
		   window.location.href = "home.html";
   	    }
	}
	
	xmlhttp.open("POST","addInDB.php",true);
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xmlhttp.send("name="+name+"&sex="+sex+"&school="+school+"&year="+year+"&phone="+phone+"&mail="+mail+"&text1="+text1+"&text2="+text2+"&text3="+text3+"&text4="+text4);
	//xmlhttp.send();
    }
}

function checkPhone(tel)
{
    if(!isNaN(tel))
    {
	if(tel.length==11 || tel.length==8 || tel.length==7)
	{
	    return true;
	}
	else{
	    return false;
	}
    }
    else{
	return false;
    }
}


function checkMail(str)
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
}

function GetRadioValue(RadioName){
    
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

$("#name").click(function(){
    $("#no_name").css("display","none");
})

$("#phone").click(function(){
    $("#no_phone").css("display","none");
    $("#wrong_phone").css("display","none");
})

$("#mail").click(function(){
    $("#no_mail").css("display","none");
    $("#wrong_mail").css("display","none");
})