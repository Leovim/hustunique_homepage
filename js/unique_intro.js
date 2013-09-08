
var speed = 100;  //lower is faster;
var x = 1;
var y = 1;
var upx = 1;
var upy = 1;

setInterval(draw,speed);
//window.onload = draw;
/**********canvas动画*******/


function draw(){
    
  // x,y值的变幻
    if(upx==1){
	x+=2;
	if(x>=30){
	    x=29;
	    upx=0;
	}	
    }
    if(upx==0){
	x--;
	if(x<=0){
	    upx=1;
	    x=1;
	}
    }

    if(upy==1){
	y++;
	if(y>=25){
	    y=24;
	    upy=0;
	}	
    }
    if(upy==0){
	y-=2;
	if(y<=0){
	    upy=1;
	    y=1;
	}
    }

    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

 
    var dot1 = new Image();
    dot1.src = "image/about/intro/point.png";
   
    //每个矩形载入一个背景和一个点

    ctx.clearRect(0,0,canvas.width,canvas.height);

    paint();
   
    function paint(){
	part1(110+x,20-y,dot1);
	part2(550,80+y,dot1);
	part3(490-x,240+y,dot1);
	part4(0+x,270+y,dot1);
	part5(440+x,440-y,dot1);
    }
   
    
    function part1(left,right,dot1){
	var imgPart1 = new Image();
	imgPart1.onload = function(){
	    //坐标变换  置于每个矩形的顶点处
	//保存当前绘图环境
	  
	    ctx.save();
	   
	    ctx.translate(left,right);
	     
	    //绘出图片
	    ctx.drawImage(imgPart1,130,10);
	    ctx.drawImage(dot1,210,40);
	   
	    
	    
	    //写字
	    ctx.font = "bold 20px sans-serif";
	    ctx.fillStyle ="#878787";   
	    ctx.fillText("teamwork",170,30);
	    ctx.font = "bold 17px sans-serif";
	    ctx.fillText("teamwork",90,90);  
	    ctx.font = "bold 30px sans-serif";
	    ctx.fillText("potential",220,90);
	    ctx.fillText("outstanding",150,130);
	    ctx.font = "bold 40px sans-serif";
	    ctx.fillStyle ="#5F5F5F";   
	    ctx.fillText("passion",10,60);
	    //恢复绘图环境
	    ctx.restore();
	}
	imgPart1.src = 'image/about/intro/part1.png';
    }
   
    function part2(left,right,dot1){
	var imgPart2 = new Image();
	imgPart2.onload = function(){
	    ctx.save();
	     ctx.translate(left,right);
	    
	//绘出图片
	    ctx.drawImage(imgPart2,100,20);
	    
	    ctx.drawImage(dot1,130,50);
	    //写字
	    ctx.font = "bold 20px sans-serif";
	    ctx.fillStyle ="#878787";   
	    ctx.fillText("outstanding",-15,50);
	    ctx.fillText("potential",0,85);  
	    ctx.font = "bold 17px sans-serif";
	    ctx.fillText("professional",80,110);
	    ctx.fillText("teamwork",150,80);
	    ctx.font = "bold 40px sans-serif";
	    ctx.fillStyle ="#5F5F5F";   
	    ctx.fillText("teamwork",120,30);
	    
	    ctx.restore();
	    
	}
	imgPart2.src = "image/about/intro/part2.png";
    }
    
    function part3(left,right,dot1){
	var imgPart3 = new Image();
	imgPart3.onload = function(){
	    ctx.save();
	    ctx.translate(left,right);
	    
	    //绘出图片
	    ctx.drawImage(imgPart3,100,30);
	    
	    ctx.drawImage(dot1,110,55);
	    //写字
	    ctx.font = "bold 20px sans-serif";
	    ctx.fillStyle ="#878787";   
	    ctx.fillText("passion",150,65);  
	    ctx.font = "bold 17px sans-serif";
	    ctx.fillText("outstanding",0,50);
	    ctx.fillText("teamwork",100,25);
	    ctx.font = "bold 40px sans-serif";
	    ctx.fillStyle ="#5F5F5F";   
	    ctx.fillText("potential",100,110);
	    
	    ctx.restore();
	    
	}
	imgPart3.src = "image/about/intro/part3.png";
    }
    
    function part4(left,right,dot1){
	var imgPart4 = new Image();
	imgPart4.onload = function(){
	    //坐标变换  置于每个矩形的顶点处
	    //保存当前绘图环境
	    ctx.save();
	    
	    ctx.translate(left,right);
	    //绘出图片
	ctx.drawImage(imgPart4,250,30);
	    
	    ctx.drawImage(dot1,290,70);
	    //写字
	    ctx.fillStyle ="#878787";   
	    ctx.font = "bold 17px sans-serif";
	    ctx.fillText("passion",320,70); 
	    
	    ctx.font = "bold 30px sans-serif";
	    ctx.fillText("outstanding",200,30);
	    ctx.fillText("teamwork",170,130);
	    ctx.font = "bold 40px sans-serif";
	    ctx.fillStyle ="#5F5F5F";   
	    ctx.fillText("professional",0,80);
	
	//恢复绘图环境
	    ctx.restore();
	}
	imgPart4.src = 'image/about/intro/part4.png';
    }
    
    function part5(left,right,dot1){
	var imgPart5 = new Image();
	imgPart5.onload = function(){
	    ctx.save();
	    ctx.translate(left,right);
	    
	    //绘出图片
	    ctx.drawImage(imgPart5,150,30);
	    
	   
	    //写字
	    ctx.font = "bold 30px sans-serif";
	    ctx.fillStyle ="#878787";   
	    ctx.fillText("passion",30,35);
	    ctx.fillText("potential",190,65);
	    ctx.font = "bold 17px sans-serif";
	    ctx.fillText("outstanding",180,30);
	    ctx.font = "bold 40px sans-serif";
	    ctx.fillStyle ="#5F5F5F";   
	    ctx.fillText("outstanding",20,105);
	    ctx.drawImage(dot1,150,40);
	    ctx.restore();

            ctx.beginPath(); 
	    ctx.strokeStyle = "#505050";
	    ctx.moveTo(330+x,78-y);
	    ctx.lineTo(682,140+y);
	    ctx.stroke();

	   // ctx.beginPath(); 
	    ctx.moveTo(686,148+y);
	    ctx.lineTo(615-x,298+y);
	    ctx.stroke();

	    ctx.moveTo(609-x,312+y);
	    ctx.lineTo(306+x,350+y);
	    ctx.stroke();

	    ctx.moveTo(305+x,355+y);
	    ctx.lineTo(595+x,490-y);
	    ctx.stroke();
	   

	    
	    
	}
	imgPart5.src = "image/about/intro/part5.png";

    }
    
}


/**************************/ 