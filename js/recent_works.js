$(".work").click(function(){
    //reloadCss("../css/animate.css");
    //点击出现动画层
    var key = $(this).attr("key");
    var flyout = "#animate"+key;
    $(".animate_div").css("display","none");
    $(flyout).css("display","block");
    if($.browser.chrome){
	//禁止滚动
	$("body").css("overflow","hidden");
    }

    if(key==1)
    {
	game();
    }
    if(key==2)
    {
	tuudo();
    }
    if(key==3)
    {
	tuzi();
    }
    if(key==4)
    {
	euuro();
    }
  
})

function game(){
    //html5游戏动画
    setTimeout(function(){
	//进
	$("#rool1").css("display","block");
	$("#rool1").addClass("animated fadeInLeftBig");
	$("#rool1").next().css("display","block");
	$("#rool1").next().addClass("animated fadeInRightBig");
    },200);

    setTimeout(function(){
	//一出一进
	$("#rool1").addClass("animated fadeOutRightBig");
	$("#rool1").next().addClass("animated fadeOutLeftBig");
	
	$("#animate1").css("backgroundColor","#17671F");

	$("#rool2").css("display","block");
	$("#rool2").addClass("animated fadeInRightBig");
	$("#rool2").next().css("display","block");
	$("#rool2").next().addClass("animated fadeInLeftBig");
    },2500);

     setTimeout(function(){
	//一出一进
	$("#rool2").addClass("animated fadeOutUpBig");
	$("#rool2").next().addClass("animated fadeOutDownBig");
	
	$("#animate1").css("backgroundColor","#E6A200");

	$("#rool3").css("display","block");
	$("#rool3").addClass("animated fadeInDownBig");
	$("#rool3").next().css("display","block");
	$("#rool3").next().addClass("animated fadeInUpBig");
    },5000);

     setTimeout(function(){
	//一出一进
	$("#rool3").addClass("animated fadeOutDownBig");
	$("#rool3").next().addClass("animated fadeOutUpBig");
	
	$("#animate1").css("backgroundColor","#BF0012");

	$("#rool4").css("display","block");
	$("#rool4").addClass("animated fadeInUpBig");
	$("#rool4").next().css("display","block");
	$("#rool4").next().addClass("animated fadeInDownBig");
    },7500);

     setTimeout(function(){
	//一出一进
	$("#rool4").addClass("animated fadeOut");
	$("#rool4").next().addClass("animated fadeOut");
	
	$("#animate1").css("backgroundColor","#000000");

	$("#rool5").css("display","block");
	$("#rool5").addClass("animated fadeIn");
	$("#rool5").next().css("display","block");
	$("#rool5").next().addClass("animated fadeIn");
	  Img.rotate('rolling', 720000);
    },10000);
}

var Img = function() {
    var T$ = function(id) { return document.getElementById(id); }
    var ua = navigator.userAgent,
    isIE = /msie/i.test(ua) && !window.opera;
    var i = 0, sinDeg = 0, cosDeg = 0, timer = null ;
    var rotate = function(target, degree) {
	target = T$(target);
	var orginW = target.clientWidth, orginH = target.clientHeight;
	clearInterval(timer);
	function run(angle) {
	    if (isIE) { // IE
		cosDeg = Math.cos(angle * Math.PI / 180);
		sinDeg = Math.sin(angle * Math.PI / 180);
		with(target.filters.item(0)) {
		    M11 = M22 = cosDeg; M12 = -(M21 = sinDeg); 
		}
		target.style.top = (orginH - target.offsetHeight) / 2 + 'px';
		target.style.left = (orginW - target.offsetWidth) / 2 + 'px';
	    } else if (target.style.MozTransform !== undefined) {  // Mozilla
		target.style.MozTransform = 'rotate(' + angle + 'deg)';
	    } else if (target.style.OTransform !== undefined) {   // Opera
		target.style.OTransform = 'rotate(' + angle + 'deg)';
	    } else if (target.style.webkitTransform !== undefined) { // Chrome Safari
		target.style.webkitTransform = 'rotate(' + angle + 'deg)';
	    } else {
		target.style.transform = "rotate(" + angle + "deg)";
	    }
	}
	
	timer = setInterval(function() {
	    i += 10;
	    run(i);
	    if (i > degree - 1) {
		i = 0;
		clearInterval(timer);
	    } 
	}, 100); 
    }
    return {rotate: rotate}
}();


function tuudo(){
     setTimeout(function(){
	//tuu进
	$("#tuu").css("display","block");
	$("#tuu").addClass("animated bounceInRight");
     },200);

    setTimeout(function(){
	//do进
	$("#do").css("display","block");
	$("#do").addClass("animated lightSpeedIn");
	//$("#do").addClass("animated hinge");
    },2000);

    setTimeout(function(){
	//mobile进
	$("#mobile").css("display","block");
	$("#mobile").addClass("animated fadeIn");
	//$("#do").addClass("animated hinge");
    },3000);

    setTimeout(function(){
	//全出
	$("#tuu").addClass("animated hinge");
	$("#do").addClass("animated hinge");
	$("#mobile").addClass("animated fadeOut");
    },4500);

    setTimeout(function(){
	//进图
	$("#inside1").css("display","block");
	$("#inside1").addClass("animated bounceInRight");
    },6500);

    setTimeout(function(){
	//进图
	$("#inside1").addClass("animated bounceOutLeft");
	$("#inside2").css("display","block");
	$("#inside2").addClass("animated bounceInRight");
    },10500);

    setTimeout(function(){
	//进图
	$("#inside2").addClass("animated bounceOutLeft");
	$("#inside3").css("display","block");
	$("#inside3").addClass("animated bounceInRight");
    },14500);

    setTimeout(function(){
	//进图
	$("#inside3").addClass("animated bounceOutLeft");
	$("#inside4").css("display","block");
	$("#inside4").addClass("animated bounceInRight");
    },18500);
}

function tuzi(){
     setTimeout(function(){
	//进场动画
	 $("#men").css("display","block");
	 $("#cloud").css("display","block");
	 $("#men").animate({"left":"-230px"},10000);
	 $("#cloud").animate({"left":"-100px"},15000);
     },200);

     setTimeout(function(){
	//进场动画
	 $("#naughty-logo").css("display","block");
	 $("#naughty-logo").addClass("animated swing");
     },800);

    setTimeout(function(){
	$("#gui1").css("display","block");
	$("#gui2").css("display","block");
	$("#gui3").css("display","block");
	$("#gui1").addClass("animated fadeInLeftBig");
	$("#gui2").addClass("animated fadeInUpBig");
	$("#gui3").addClass("animated fadeInDownBig");
    },2000);

     setTimeout(function(){
	$("#tuzi_logo").css("display","block");
	$("#tuzi_logo").addClass("animated fadeInRightBig");
    },3200);

    setTimeout(function(){
	//生出火飞过去
	$("#fire").css("display","block");
	$("#fire").addClass("animated fadeIn");
	$("#fire").animate({"left":"320px","top":"190px"},800);
    },5000);

    setTimeout(function(){
	//火消失，怪物后消失
	$("#fire").addClass("animated fadeOut");
    },6000);

    setTimeout(function(){
	$("#gui3").addClass("animated fadeOut");
    },6300);

    //怪物飞走  兔子追上
    setTimeout(function(){
	$("#gui1").addClass("animated bounceOutRight");
	$("#gui2").addClass("animated bounceOutUp");
    },8000);

     setTimeout(function(){
	$("#tuzi_logo").addClass("animated bounceOutUp");
    },9000);

    

    //介绍图进来
    setTimeout(function(){
	//进图

	$("#men").css("display","none");
	$("#cloud").css("display","none");
	$("#buttom_bg").css("display","none");

	$("#big1").css("display","block");
	$("#big1").addClass("animated bounceInRight");
    },10000);

    setTimeout(function(){
	//进图
	$("#big1").addClass("animated bounceOutLeft");
	$("#big2").css("display","block");
	$("#big2").addClass("animated bounceInRight");
    },14500);

    setTimeout(function(){
	//进图
	$("#big2").addClass("animated bounceOutLeft");
	$("#big3").css("display","block");
	$("#big3").addClass("animated bounceInRight");
    },18500);

    setTimeout(function(){
	//进图
	$("#big3").addClass("animated bounceOutLeft");
	$("#big4").css("display","block");
	$("#big4").addClass("animated bounceInRight");
    },22500);
    
    setTimeout(function(){
	//进图
	$("#big4").addClass("animated bounceOutLeft");
	$("#big5").css("display","block");
	$("#big5").addClass("animated bounceInRight");
    },26500);
    
     setTimeout(function(){
	//进图
	$("#big5").addClass("animated bounceOutLeft");
	 $("#tuzi_big").css("display","block");
	$("#tuzi_big").addClass("animated fadeIn");
    },30500);

}

function euuro(){
    if($.browser.msie){
	//for ie
	$("#forie").css("display","block");
    }
    else{
	//canvas
	$("#animate4").css("backgroundColor","red");
    }
}

$(".close").bind("click",function(){
    $(this).parent().parent().css("display","none");
    $(".element").css("display","none");
    //reloadCss("../css/recent_works.css");
    //removejscssfile("../css/animate.css", "css"); 
    //location.reload();
    if($.browser.chrome){
	//恢复滚动
	$("body").css("overflow","visible");
    }
})


function reloadCss(mycss){  
    var l = document.createElement("link");  
    l.setAttribute("type", "text/css");  
    l.setAttribute("rel", "stylesheet");  
    l.setAttribute("href",mycss);  
    document.getElementsByTagName("head")[0].appendChild(l);  
} 

function removejscssfile(filename, filetype){ 
//判断文件类型 
var targetelement=(filetype=="js")? "script" : (filetype=="css")? "link" : "none"; 
//判断文件名 
var targetattr=(filetype=="js")? "src" : (filetype=="css")? "href" : "none"; 
var allsuspects=document.getElementsByTagName(targetelement); 
//遍历元素， 并删除匹配的元素 
for (var i=allsuspects.length; i>=0; i--){ 
if (allsuspects[i] && allsuspects[i].getAttribute(targetattr)!=null && allsuspects[i].getAttribute(targetattr).indexOf(filename)!=-1) 
allsuspects[i].parentNode.removeChild(allsuspects[i]); 
} 
} 
