window.onload = function(){
    grayscale.prepare($('.year_logo'));
    grayscale.prepare( $('.mainImg') );
    grayscale($(".year_logo"));
    grayscale($(".mainImg"));

}

window.onscroll =function(){
    var y = $(document).scrollTop();
    if(y>=53)
    {

	    colorful($("#img2012"));
	    colorful($("#year2012"));
	
    }
    if(y>213)
    {
	    colorful($("#img2011_1"));
	    colorful($("#img2011_2"));
	    colorful($("#year2011"));
    }
     if(y>426)
    {
	    colorful($("#img2010_1"));
	    colorful($("#img2010_2"));
	    colorful($("#year2010"));
    }
     if(y>693)
    {
	    colorful($("#img2009_1"));
	    colorful($("#img2009_2"));
	    colorful($("#year2009"));
    }
     if(y>959)
    {
	    colorful($("#img2008_1"));
	    colorful($("#img2008_2"));
	    colorful($("#year2008"));
    }
    if(y>1280)
    {
	    colorful($("#img2007_1"));
	    colorful($("#img2007_2"));
	    colorful($("#year2007"));

    }
     if(y>1546)
    {

	    colorful($("#img2006"));
	    colorful($("#year2006"));

    }
     if(y>1620)
    {

	    colorful($("#img2005"));
	    colorful($("#year2005"));
	
    }
     if(y>1706)
    {
	    colorful($("#img2004"));
	    colorful($("#year2004"));
    }
     if(y>1780)
    {
	    colorful($("#img2000"));
	    colorful($("#year2000"));
    }
}

function colorful(o){
    grayscale.reset(o);
    $(o).css("filter","");
}
