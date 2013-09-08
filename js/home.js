
$("#match2").bind("mouseover",function(){
    $("#logo_match").animate({"top":"-1px"},800,function(){
	$(this).css("top","-186px");
    });
})

$("#product2").bind("mouseover",function(){
    $("#logo_product").animate({"top":"-1px"},800,function(){
	$(this).css("top","-186px");
    });
})

$("#outsourcing2").bind("mouseover",function(){
    $("#logo_outsourcing").animate({"top":"-1px"},800,function(){
	$(this).css("top","-194px");
    });
})

$("#turn_left").bind("mouseover",function(){
    $(this).animate({"left":"-4px"},400);
})

$("#turn_left").bind("mouseout",function(){
    $(this).animate({"left":"9px"},400);
})

$("#turn_right").bind("mouseover",function(){
    $(this).animate({"left":"800px"},400);
})

$("#turn_right").bind("mouseout",function(){
    $(this).animate({"left":"787px"},400);
})


window.onload = function(){
    $("#pic1").css("backgroundColor","#1874CD");
}

var autorun = window.setInterval(right,5000);
var count = 1;

$(".buttons").bind("mouseover",light);

$("#turn_right").bind("click",right);
$("#turn_left").bind("click",left);



function light(){
    clearInterval(autorun);
    $(".buttons").css("backgroundColor","#6F6E6E");
    $(this).css("backgroundColor","#1874CD");
    var key = $(this).attr("key");
    count = parseInt(key);
    var left = (key-1)*(-725)+"px";
    $("#holder").animate({"left":left},200);
    autorun = window.setInterval(right,5000);
}

function right(){
    clearInterval(autorun);
    if(count==4)
    {
	count = 0;
    }
    var left = count*(-725)+"px";
    $(".buttons").css("backgroundColor","#6F6E6E");
    var now = count+1;
    var id="#pic"+now;
    $(id).css("backgroundColor","#1874CD");
    $("#holder").animate({"left":left},800);
    count++;
    autorun = window.setInterval(right,5000);
}

function left(){
    clearInterval(autorun);
    if(count==1)
    {
	count = 5;
    }
    var left = (count-2)*(-725)+"px";
    $(".buttons").css("backgroundColor","#6F6E6E");
    var now = count-1;
    var id="#pic"+now;
    $(id).css("backgroundColor","#1874CD");
    $("#holder").animate({"left":left},800);
    count--;
    autorun = window.setInterval(right,5000);
}


  

