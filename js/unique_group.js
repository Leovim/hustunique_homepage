

var perLeft;

window.onload = function(){
    // 辅助布局
    var width = $(document).width();
    var height = ($(document).height()-316)+"px";
    $("section").css("height",height);
    
    var container_width = (width*6)+"px";
    $("#container").css("width",container_width);
    $("#container").css("height","100%");
    
    perLeft = (($("#container").width()/6)*(-1));

    $(".groups").css("height","100%");
    $(".groups").css("width","16.6%");

    $("#button1").css("backgroundColor","#EBAF3C");
}



$(function(){
    $("#move_button").draggable({axis:"x"},{containment:"parent"},{stop:move},{start:clearBut});
})

function clearBut(){
    $(".circleBut").css("backgroundColor","#5F5F5F");
}

function move(){
    var left = parseInt(this.style.left);
    //alert(left);
    if(left<=35){
	//sde
	var nowLeft = perLeft*0+"px";
	$(this).animate({"left":"0px"},400,function(){
	    $("#button1").css("backgroundColor","#E9662C");
	});
	$("#container").animate({"left":nowLeft},800);
    }
    if(left>35 && left<=157)
    {
	//design
	var nowLeft = perLeft*1+"px";
	$(this).animate({"left":"75px"},400,function(){
	    $("#button2").css("backgroundColor","#EBAF3C");
	});
	$("#container").animate({"left":nowLeft},800);
    }
    if(left>=157 && left<=305){
	//alg
	var nowLeft = perLeft*2+"px";
	$(this).animate({"left":"226px"},400,function(){
	    $("#button3").css("backgroundColor","#00B268");
	});
	$("#container").animate({"left":nowLeft},800);
    }
    if(left>305 && left<=455){
	//it
	var nowLeft = perLeft*3+"px";
	$(this).animate({"left":"376px"},400,function(){
	    $("#button4").css("backgroundColor","#30D590");
	});
	$("#container").animate({"left":nowLeft},800);
    }
    if(left>=455 && left<=608){
	//emb
	var nowLeft = perLeft*4+"px";
	$(this).animate({"left":"526px"},400,function(){
	    $("#button5").css("backgroundColor","#008894");
	});
	$("#container").animate({"left":nowLeft},800);
    }
    if(left>608){
	//pm
	var nowLeft = perLeft*5+"px";
	$(this).animate({"left":"677px"},400,function(){
	    $("#button6").css("backgroundColor","#2FB3BF");
	});
	$("#container").animate({"left":nowLeft},800);
    }
}

$("#bar_container").bind("click",function(e){
    var marginLleft = ($(document).width()-700)/2;
    var left = (e.clientX-marginLleft);
    if(left<=35){
	//sde
	var nowLeft = perLeft*0+"px";
	$("#move_button").animate({"left":"0px"},400,function(){
	    $("#button1").css("backgroundColor","#E9662C");
	});
	$("#container").animate({"left":nowLeft},800);
	clearBut();
    }
    if(left>35 && left<=157)
    {
	//design
	var nowLeft = perLeft*1+"px";
	$("#move_button").animate({"left":"75px"},400,function(){
	    $("#button2").css("backgroundColor","#EBAF3C");
	});
	$("#container").animate({"left":nowLeft},800);
	clearBut();
    }
    if(left>=157 && left<=305){
	//alg
	var nowLeft = perLeft*2+"px";
	$("#move_button").animate({"left":"226px"},400,function(){
	    $("#button3").css("backgroundColor","#00B268");
	});
	$("#container").animate({"left":nowLeft},800);
	clearBut();
    }
    if(left>305 && left<=455){
	//it
	var nowLeft = perLeft*3+"px";
	$("#move_button").animate({"left":"376px"},400,function(){
	    $("#button4").css("backgroundColor","#30D590");
	});
	$("#container").animate({"left":nowLeft},800);
	clearBut();
    }
    if(left>=455 && left<=608){
	//emb
	var nowLeft = perLeft*4+"px";
	$("#move_button").animate({"left":"526px"},400,function(){
	    $("#button5").css("backgroundColor","#008894");
	});
	$("#container").animate({"left":nowLeft},800);
	clearBut();
    }
    if(left>608){
	//pm
	var nowLeft = perLeft*5+"px";
	$("#move_button").animate({"left":"677px"},400,function(){
	    $("#button6").css("backgroundColor","#2FB3BF");
	});
	$("#container").animate({"left":nowLeft},800);
	clearBut();
    }
})


