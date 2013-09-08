window.onload = function(){
    if($.browser.msie){
	$(function(){
	    placeholder("name","Your Name");
	    placeholder("subject","Your Subject")
	    placeholder("email","Your Email");
	    placeholder("message","Your Message");
	});
    }
}



function placeholder(id,value){
    var $selector = $("#"+id);
    var val = value;
    $selector.attr({value:val});
    $selector.focus(function(){
	if($selector.val() == value)
	{
	    $selector.attr({value:""});
	}
    }).blur(function(){
	if($selector.val() == "")
	{
	    $(this).attr({value:val});
	}
    }
}