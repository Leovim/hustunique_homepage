var at = 1;

window.onload = function(){
    $("#book_sde").css("backgroundColor","#6B98D1");
    $("#broad1").css("display","block");
    $("#broad1").css("width","415px");
}


$(".group_book").click(function(){
    var nowAt = $(this).attr("group");
    if(nowAt == at)
    {
    }
    else
    {
	//当前存在的broad收缩
	var nowBroad = "#broad"+at;
	$(nowBroad).animate({"width":"0px"},800,function(){
	    $(this).css("display","none");
	});
	
	at = nowAt;
	//点击后的broad出现
	$(".group_book").css("backgroundColor","#F1F1F1");
	$(this).css("backgroundColor","#6B98D1");


	var nextBroad = "#broad"+at;

	$(nextBroad).animate({"width":"415px"},800);
	$(nextBroad).css("display","block");
	
    }
    
});