
$(".tag").bind("mouseover",mouseOver);
$(".tag").bind("mouseout",mouseOut);


function mouseOver(){
    $(this).css("backgroundImage","url(../image/product/history/tage.png)");
    $(this).css("backgroundRepeat","no-repeat");
}

function mouseOut(){
      $(this).css("backgroundImage","");
}



window.onload = function(){
    var a = document.getElementById("cool").innerHTML;
    if(a== "3" || a=="4")
    {
	$("#content").css("height","1300px");
    }

	$(".frame img").css("cursor","pointer");
	$(".frame img").prev().css("display","none");
	$(".frame img").prev().css("left","13px");
	
	$(".frame img").bind("mouseover",function(){
	    $(".frame img").prev().css("display","none");
	    $(this).prev().css("display","block");
	})
	
}

