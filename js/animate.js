$(".work").click(function(){ 
     $(".close").css("display","none");
    //开始动画
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
	$("#animate1").css("backgroundColor","#3E5EA2");
    setTimeout(function(){
	//进
	$("#rool1").css("display","block");
	$("#rool1").css("left","-500px"); 
    	$("#rool1").animate({"left":"417px"},500);
	$("#rool1").next().css("display","block");
	$("#rool1").next().css("left","800px"); 
    	$("#rool1").next().animate({"left":"50px"},500);
    },200);

	timer = setTimeout(function(){
	//一出一进
	$("#rool1").animate({"left":"1000px"},500);
	$("#rool1").next().animate({"left":"-500px"},500,function(){
		$("#animate1").css("backgroundColor","#17671F");
		$("#rool2").css("display","block");
		$("#rool2").css("left","1000px"); 
    	$("#rool2").animate({"left":"0px"},500);
		$("#rool2").next().css("display","block");
		$("#rool2").next().css("left","-500px"); 
    	$("#rool2").next().animate({"left":"450px"},500);
	});
	
    },1700);
	
	setTimeout(function(){
	//一出一进
	$("#rool2").animate({"left":"-900px"},500);
	$("#rool2").next().animate({"left":"1000px"},500,function(){
		$("#animate1").css("backgroundColor","#E6A200");
		$("#rool3").css("display","block");
		$("#rool3").css("top","-600px"); 
    	$("#rool3").animate({"top":"0px"},500);
		$("#rool3").next().css("display","block");
		$("#rool3").next().css("top","600px"); 
    	$("#rool3").next().animate({"top":"280px"},500);
	});
	
    },3200);

	setTimeout(function(){
	//一出一进
	$("#rool3").animate({"top":"600px"},500);
	$("#rool3").next().animate({"top":"-300px"},500,function(){
		$("#animate1").css("backgroundColor","#BF0012");
		$("#rool4").css("display","block");
		$("#rool4").css("top","600px"); 
    	$("#rool4").animate({"top":"0px"},500);
		$("#rool4").next().css("display","block");
		$("#rool4").next().css("top","-300px"); 
    	$("#rool4").next().animate({"top":"100px"},500);
	});
    },5000);

	setTimeout(function(){
	//一出一进
	$("#rool4").animate({"top":"-600px"},500);
	$("#rool4").next().animate({"top":"600px"},500,function(){
		$("#animate1").css("backgroundColor","#081117");
		$("#rool6").css("display","block");
		$("#rool6").css("left","1000px"); 
    	$("#rool6").animate({"left":"0px"},500);
		$("#rool6").next().css("display","block");
		$("#rool6").next().css("left","-600px"); 
    	$("#rool6").next().animate({"left":"400px"},500);
	});
    },7000);
  
	setTimeout(function(){
	//一出一进
	$("#rool6").animate({"left":"-600px"},500);
	$("#rool6").next().animate({"left":"1000px"},500,function(){
		$("#animate1").css("backgroundColor","#7DC81B");
		$("#rool7").css("display","block");
		$("#rool7").css("left","-600px"); 
    	$("#rool7").animate({"left":"400px"},500);
		$("#rool7").next().css("display","block");
		$("#rool7").next().css("left","1000px"); 
    	$("#rool7").next().animate({"left":"200px"},500);
	});
    },9000);
	
	 setTimeout(function(){
	//一出一进
		$("#rool7").animate({"left":"-600px"},500);
		$("#rool7").next().animate({"left":"1000px"},500,function(){
			$("#animate1").css("backgroundColor","#000000");
			$("#rool5").css("display","block");
			$("#rolling").css("display","block");
			$("#word8").css("display","block");
			$(".close").css("display","block");
	  		Img.rotate('rolling', 720000);
		});
		
    },11000);
}



function tuudo(){
	setTimeout(function(){
	//tuu进
		$("#tuu").css("display","block");
		$("#tuu").css("left","1000px"); 
    	$("#tuu").animate({"left":"495px"},1000);
     },200);

	setTimeout(function(){
	//do进
		$("#do").css("display","block");
		$("#do").css("left","1000px"); 
    	$("#do").animate({"left":"710px"},200,function(){
			$("#do").animate({"left":"750px"},800,function(){
				$("#do").animate({"left":"710px"},200);
			});
		});
    },2000);

	setTimeout(function(){
	//mobile进
		$("#mobile").css("display","block");
		
		$("#mobile").css("left","-500px"); 
    	$("#mobile").animate({"left":"0px"},500);
    },3200);

	setTimeout(function(){
		//全出1
    	$("#mobile").animate({"left":"-600px"},300);
    },5500);
   
	setTimeout(function(){
		//全出2
	    $("#do").animate({"left":"800px"},1500,function(){
			$("#do").animate({"left":"710px"},200,function(){
				$("#tuu").animate({"left":"-600px"},500);
			});
		});
    },7000);

	setTimeout(function(){
		//全出3
   		 $("#do").animate({"left":"-600px"},500);	
    },10000);
		
	setTimeout(function(){
	//进图
		$("#inside1").css("display","block");
		$("#inside1").css("left","900px"); 
    	$("#inside1").animate({"left":"0px"},500);
    },11000);

    setTimeout(function(){
	//进图
		$("#inside1").animate({"left":"-1050px"},500);
		$("#inside2").css("display","block");
		$("#inside2").css("left","900px"); 
    	$("#inside2").animate({"left":"0px"},500);
    },16000);

    setTimeout(function(){
	//进图
		$("#inside2").animate({"left":"-1050px"},500);
		$("#inside3").css("display","block");
		$("#inside3").css("left","900px"); 
    	$("#inside3").animate({"left":"0px"},500);
    },21000);

    setTimeout(function(){
	//进图
		$("#inside3").animate({"left":"-1050px"},500);
		$("#inside4").css("display","block");
		$("#inside4").css("left","900px"); 
    	$("#inside4").animate({"left":"0px"},500,function(){
		$(".close").css("display","block");
	});
    },26000);

}

function euuro(){
    if($.browser.mozilla)
    {
	$("#animate4").css("backgroundImage","url(./image/product/recent/euuro/euuro-big.png)");
    }
    else
    {
	init();
    }
    	$(".close").css("display","block");
}

function tuzi(){
    //兔子动画
    setTimeout(function(){
	//进场动画 天安门和云
	 $("#men").css("display","block");
	 $("#cloud").css("display","block");
	 $("#men").css("left","1000px");
	 $("#cloud").css("left","0px");
	 $("#men").animate({"left":"-230px"},10000);
	 $("#cloud").animate({"left":"1000px"},20000);
    },200);

    setTimeout(function(){
	//进场动画 淘气的贴纸
	 $("#naughty-logo").css("display","block");
	 $("#naughty-logo").css("left","-300px");
	 $("#naughty-logo").animate({"left":"340px"},800,function(){
	 })
    },1000);

    setTimeout(function(){
	// 怪兽
	$("#gui1").css("display","block");
	$("#gui2").css("display","block");
	$("#gui3").css("display","block");
	$("#gui1").css("left","-100px");
	$("#gui2").css("top","600px");
	$("#gui3").css("top","-100px");
	$("#gui1").animate({"left":"30px"},700);
	$("#gui2").animate({"top":"324px"},700);
	$("#gui3").animate({"top":"220px"},700);
    },2000);

    setTimeout(function(){
	//兔子进场
	$("#tuzi_logo").css("display","block");
	$("#tuzi_logo").css("left","1000px");
	$("#tuzi_logo").animate({"left":"680px"},500) 
    },3500)

    setTimeout(function(){
	//兔子生火
		$("#fire").css("display","block");
    },4700)
	
	setTimeout(function(){
	//兔子发火
		$("#fire").animate({"left":"320px","top":"190px"},800);
    },5500)

	setTimeout(function(){
	//怪兽被火干掉
		$("#fire").css("display","none");
		$("#gui3").css("display","none");
    },6700)
	
	setTimeout(function(){
	//逃走？
		$("#gui1").animate({"left":"-200px"},700);
		$("#gui2").animate({"top":"-300px"},700,function(){
			$("#fire").css({"left":"640px","top":"130px"});
			$("#fire").css("display","block");
		});
	},7500)

	setTimeout(function(){
	//追！
		$("#fire").animate({"left":"487px","top":"-300px"},800,function(){
		  $("#tuzi_logo").animate({"left":"-200px"},800) 
		});		
	},9000)
	
	//哈哈 开始出图
	setTimeout(function(){
	//进图
		$("#big1").css("display","block");
		$("#big1").css("left","900px"); 
    	$("#big1").animate({"left":"100px"},500);
    },11000);

    setTimeout(function(){
	//进图
		$("#big1").animate({"left":"-1050px"},500);
		$("#big3").css("display","block");
		$("#big3").css("left","900px"); 
    	$("#big3").animate({"left":"100px"},500);
    },14000);

    setTimeout(function(){
	//进图
		$("#big3").animate({"left":"-1050px"},500);
		$("#big4").css("display","block");
		$("#big4").css("left","900px"); 
    	$("#big4").animate({"left":"100px"},500,function(){
	});
    },17000);

	setTimeout(function(){
	//进图
		$("#big4").animate({"left":"-1050px"},500);
		$("#big5").css("display","block");
		$("#big5").css("left","900px"); 
    	$("#big5").animate({"left":"100px"},500,function(){
	});
    },20000);

	setTimeout(function(){
	//进图
		$("#big5").animate({"left":"-1050px"},500);
		$("#tuzi_big").css("display","block");
		$("#tuzi_big").css("left","900px"); 
    	$("#tuzi_big").animate({"left":"0px"},500,function(){
		$(".close").css("display","block");
	});
    },23000);
}


$(".close").bind("click",function(){
    //关闭 结束动画
    $(this).parent().parent().css("display","none");
    $(".element").css("display","none");
    if($.browser.chrome){
	//chrome恢复滚动
	$("body").css("overflow","visible");
    }
})


//图片旋转
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

