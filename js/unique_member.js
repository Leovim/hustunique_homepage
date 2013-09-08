$(".leftImg").bind("mouseover",getOut);
$(".leftImg").bind("mouseout",getIn);
$(".rightImg").bind("mouseover",getOut);
$(".rightImg").bind("mouseout",getIn);

function getOut(){
    $(this).next().css("z-index","2");
    $(this).next().css("display","block");
    $(this).next().bind("mouseover",function(){
	$(this).css("z-index","2");
	$(this).css("display","block");
    });
    //我是傻逼...
    //$(this).next().animate({"width":"296px"},700);
}

function getIn(){
   // $(this).next().animate({"width":"0px"},700);
    $(this).next().css("display","none");
    $(this).next().css("z-index","1");
    $(this).next().bind("mouseout",function(){
	$(this).css("z-index","1");
	$(this).css("display","none");
    });
}
