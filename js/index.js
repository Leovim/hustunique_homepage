var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var center = {x:460,y:282};
var backgroundCanvas = document.getElementById("backgroundCanvas");
var backCtx = backgroundCanvas.getContext("2d");
var controlCanvas = document.getElementById("controlCanvas");
var controlCtx = controlCanvas.getContext("2d");
//610 900
var smallEllipse = {center:center,a:300,b:164.54};
var largeEllipse = {center:center,a:450,b:450*280/500};
var vsEllipse = {center:center,a:310,b:310*181/330};
var vlEllipse = {center:center,a:440,b:440*280/500};
var teamEllipse = {center:center,a:320,b:320*280/500};
var dateEllipse = {center:center,a:330,b:330*181/300};
var typeEllipse = {center:center,a:390,b:390*280/500};
var ballEllipse = {center:center,a:400,b:400*280/500};
var outerEllipse = {center:center,a:458,b:458*288/508};
var innerEllipse = {center:center,a:440,b:440*280/500};
var tieEllipse = {center:center,a:445,b:445*280/500};

var relativeDistance = {};
var dyeArr = [];
var fontStyle = "500 13px Arial";
var dateFontStyle = "500 15px Arial";
var noteFontStyle = "100 10px Arial";
var angleArr1 = [11.2875,10.8112,10.001,9.0548,8.1391,7.3565,6.7567,6.3611,6.1777,6.1921,6.3135,6.3542,6.2483,6.1629,6.2453,6.5380];
var angleArr2 = [6.5489,7.1467,7.8799,8.699,9.5109,10.1787,10.5525,10.5325,10.1234,
                 9.4356,8.6175,7.8035,7.082,6.4999,6.0788,5.8284,5.7493,5.8133,5.9176];
var angleArr3 = [18.3055,16,14,9.0548,10.001,10.8112,11.8275];
var topArr= [{startTop:146,gapTop:0},{startTop:107,gapTop:85},{startTop:65,gapTop:80},{startTop:50,gapTop:65},{startTop:34,gapTop:55},{startTop:35,gapTop:44}];
var pointData = poinDetails;
var teams =[];
var points = [];
function initTeams(data){
    for(var i=0;i<4;i++){
        teams.push(data[i]["name"]);
        points.push(data[i]["point"]);
    }
}
initTeams(pointData["A"]);
initTeams(pointData["B"]);
initTeams(pointData["C"]);
initTeams(pointData["D"]);
var reverseTeams = [];
for(var i=0,len=teams.length;i<len;i++){
    reverseTeams[i] = teams[len-i-1];
}
var dates = [9,10,11,12,13,14,15,16,17,18,19,20,22,23,24,25,28,29,2];
var type = ["决赛","半决赛","1/4决赛","D","C","B","A"];

var team = {"波兰":{group:"A",point:0},"希腊":{group:"A",point:0},"俄罗斯":{group:"A",point:0},"捷克":{group:"A",point:0},"荷兰":{group:"B",point:0},"丹麦":{group:"B",point:0},"德国":{group:"B",point:0},"葡萄牙":{group:"B",point:0},"西班牙":{group:"C",point:0},"意大利":{group:"C",point:0},"爱尔兰":{group:"C",point:0},"克罗地亚":{group:"C",point:0},"乌克兰":{group:"D",point:0},"瑞典":{group:"D",point:0},"法国":{group:"D",point:0},"英格兰":{group:"D",point:0}};

var pinyin = {"波兰":"bolan","希腊":"xila","俄罗斯":"eluosi","捷克":"jieke","荷兰":"helan","丹麦":"danmai","德国":"deguo","葡萄牙":"putaoya","西班牙":"xibanya","意大利":"yidali","爱尔兰":"aierlan","克罗地亚":"keluodiya","乌克兰":"wukelan","瑞典":"ruidian","法国":"faguo","英格兰":"yinggelan"};
var gridColor = {"type":"#94c4f4","teams":"#d9644a","date":"#ffca3d"};
var preOver = -1;

var contents = type.concat(reverseTeams).concat(dates);
var radianArr = [0].concat(angleArr3).concat(angleArr1).concat(angleArr2);
var typeStart = 0;
var teamStart = 7;
var dateStart = 23;
radianArr[0] = radianArr[0]/180;
for(var i=1;i<radianArr.length;i++){
    radianArr[i] = radianArr[i]/180 + radianArr[i-1];
}
var hasBall = true,ballPosition={};
var teamImgs = {};
var football = new Image();
var len =angleArr1.length;
var date = new Date();
var month = date.getMonth()+1;
var day = date.getDate();
var matches = {};
var proportion = 1;
matches = matchInfo["matches"];
//var liveAddressArr = liveAddress["matches"];
//init();
function init(){
    initHeight(500);
    var originHeight = backgroundCanvas.height;
    var actualHeight = parseInt(backgroundCanvas.style.height);
    proportion = actualHeight/originHeight;
    drawImg("img/inside.png",160,119,600,329,backCtx);
    ellipseArc(largeEllipse,0,2,true,backCtx);
    backCtx.save();
    backCtx.fillStyle = "#f0f0f0";
    backCtx.fill();
    backCtx.restore();
    ctx.save();
    ctx.fillStyle = "#f0f0f0";
    ctx.fill();
    ctx.restore();
    getRelativeDistance(backgroundCanvas);
    drawLines(radianArr,backCtx,false);
    for(var i=0;i<contents.length;i++){
        drawWordByIndex(i,backCtx);
    }
    drawBall();
    drawNote(7/6,angleArr2,backCtx,"black");
    drawRingArc(0,0.5,"#94c4f4",backCtx);
    drawRingArc(0.5,7/6,"#bc0001",backCtx);
    drawRingArc(7/6,2,"#f7ae1e",backCtx);
    afresh(getIndexByToday());
    $("#notice").show();
    controlCanvas.onmousemove = function(event){
        var position = getRelativePosition(event);
        if(isInRing(position)){
            $("#notice").hide();
            var radian = getRadian(position);
            var index = search(radianArr,radian);
            if(index != -1 && index != preOver){
                preOver = index;
                $(".rec").stop().hide();
                afresh(index);
            }
        }
    }
}
//
function initHeight(height){
    //var centerHeight = $(window).height()-$("#head").height()-$("#foot").height();
    //var correctionVal = 10;
    //var height = centerHeight - correctionVal;
    $("canvas").height(height);
    //var leftPosition = ($("#index").width()- height*backgroundCanvas.width/backgroundCanvas.height)/2;
   // $("canvas").css({"left":leftPosition+"px"});
}
function afresh(index){
    var content = contents[index];
    var result = searchRelative(index);
    var arr = result.result;
    var showMatches = result.showMatches;
    var len = contents.length;
    var type;
    ctx.clearRect(0,0,900,550);
    fillGridByIndex(index,"#4d4d4d",ctx);
    drawWordByIndex(index,ctx,"white");
    for(var i=0;i<len;i++){
        if(arr.indexOf(contents[i]) != -1){
            type = getType(i);
            fillGridByIndex(i,gridColor[type],ctx);
            drawWordByIndex(i,ctx,"white");
        }
    }
    drawBall();
    drawLines(radianArr,false,ctx);
    drawNote(7/6,angleArr2,ctx,"black");
    showCenter(showMatches);
}
function getIndexByToday(){
    if(month == 6){
        if(contents.indexOf(day) != -1){
            return contents.indexOf(day);
        }
        else{
            if(day < 30){
                var today = day;
                while(contents.indexOf(today) == -1){
                    today += 1;
                }
                return contents.indexOf(today);
            }
            else{
                return contents.indexOf(2);
            }
        }
    }
    return contents.indexOf(2);
}
function drawRingArc(startRadian,endRadian,startColor,ctx){
    ctx.save();
    ctx.beginPath();
    ellipseArc(outerEllipse,startRadian,endRadian,false,ctx);
    var startTrail = findPosition(endRadian,largeEllipse);
    ctx.lineTo(startTrail.x,startTrail.y);
    ellipseArc(largeEllipse,endRadian,startRadian,true,ctx);
    var endHead = findPosition(startRadian,outerEllipse);
    ctx.lineTo(endHead.x,endHead.y);
    ctx.closePath();
    ctx.fillStyle=startColor;
    ctx.fill();
}
function drawBall(){
    if(!hasBall) return;
    var img = football;
    if(!img.src){
        img.src = "img/football.png";
        img.onload = function(){
            img.position = getBallPosition();
            if(img.position == null){
                hasBall = false;
                return;
            }
            ctx.drawImage(img,0,0,img.width,img.height,img.position.x-24,img.position.y-57,img.width,img.height);
        }
    }
    else{
        img.position = getBallPosition();
        if(img.position == null){
            hasBall = false;
            return;
        }
        ctx.drawImage(img,0,0,img.width,img.height,img.position.x-24,img.position.y-57,img.width,img.height);
    }
}
function getBallPosition(){
    var start = 7/6;
    if(month == 6){
        if(day <=9){
            return findPosition(start+angleArr2[0]/360,ballEllipse);
        }
        else if(dates.indexOf(day) != -1){
            var index = contents.indexOf(day);
            return findPosition((radianArr[index]+radianArr[index+1])/2,ballEllipse);
        }
    }
    else if (month == 7 && day == 2){
        return findPosition((2+radianArr[radianArr.length-2])/2,ballEllipse);
    }
    return null;
}
function drawNote(start,angleArr,ctx,color){
    var len = angleArr.length;
    var position = findPosition(start+angleArr[0]/180/2,largeEllipse);
    ctx.save();
    ctx.font = noteFontStyle;
    ctx.fillStyle = color;
    ctx.fillText("6月",position.x+56,position.y+35);
    var k = dateStart;
    var nPosition = findPosition((radianArr[k]+radianArr[k+1])/2,largeEllipse);
    var len = radianArr.length;
    nPosition = findPosition((radianArr[len-2]+radianArr[len-1])/2,largeEllipse);
    ctx.fillText("7月",nPosition.x-112,nPosition.y);
    ctx.restore();
}

function drawImg(src,x,y,width,height,ctx){
    var img = new Image();
    img.src = src;
    img.onload = function(){
        if(width && height){
            ctx.drawImage(img,0,0,img.width,img.height,x,y,width,height);
        }
        else{
            ctx.drawImage(img,0,0,img.width,img.height,x,y,img.width,img.height);
        }
    }
}
function getType(index){
    var type;
    if(index < teamStart){
        return "type";
    }
    if(index < dateStart){
        return "teams";
    }
    return "date";
}
function typeTransform(type){
    if(type == "G"){
        return "决赛";
    }
    if(type == "F"){
        return "半决赛";
    }
    if(type == "E"){
        return "1/4决赛";
    }
    return type;
}
function dateTransform(time){
    var timeArr = time.split(",");
    return parseInt(timeArr[1]);
}
function searchRelative(index){
    var content = contents[index];
    var len = matches.length;
    var result = [];
    var showMatches = [];
    var type = getType(index);
    for(var i=0;i<len;i++){
        var match = matches[i];
        if( type != "teams"){
            if(type == "date" && dateTransform(match["time"]) == content){
                result.push(typeTransform(match["type"]));
                result.push(match["hostTeam"]);
                result.push(match["guestTeam"]);
                showMatches.push(match);
            }
            else if( typeTransform(match["type"]) == content){
                result.push(dateTransform(match["time"]));
                result.push(match["hostTeam"]);
                result.push(match["guestTeam"]);
                showMatches.push(match);
            }
            else{
            }
        }
        else{
            if(content == match["hostTeam"] || content == match["guestTeam"]){
                if(match["type"]){
                    result.push(typeTransform(match["type"]));
                }
                if(match["time"]){
                    result.push(dateTransform(match["time"]));
                }
                showMatches.push(match);
            }
            else{
            }
        }
    }
    return {result:result,showMatches:showMatches};
}
/*
 function drawKeys(arr){
 var len = arr.length;
 for(var i=0;i<len;i++){
 if(arr[i]){
 var k = contents.indexOf(arr[i]);
 if(k != -1){
 fillGridByIndex(k,"red",ctx);
 drawWordByIndex(k,"white");
 dyeArr.push(k);
 }
 }
 }
 }*/
function search(arr,des){
    des = des % 2;
    if(des<0){
        des += 2;
    }
    var len = arr.length;
    for(var i=0;i<len;i++){
        if(des<arr[i]){
            return i-1;
        }
    }
    return -1;
}


function drawWordByIndex(index,ctx,color){
    ctx.save();
    ctx.font = fontStyle;
    var ellipse;
    var position;
    if( typeof(color) != "undefined"){
        ctx.fillStyle = color;
    }
    if(index <teamStart){
        ellipse = typeEllipse;
        position = findPosition((radianArr[index]+radianArr[index+1])/2,ellipse);
        ctx.font = fontStyle;
        ctx.fillText(contents[index],position.x-ctx.measureText(contents[index]).width/2,position.y+parseInt(ctx.font.substr(4))/2);
    }
    else if(index < dateStart){
        ellipse = teamEllipse;
        position = findPosition((radianArr[index]+radianArr[index+1])/2,ellipse);
        var radian = 1 - radianArr[index];
        var y = 2/Math.tan(radian);
        ctx.translate(position.x,position.y);
        ctx.rotate(-(1-(radianArr[index]+radianArr[index+1])/2)*Math.PI);
        ctx.font = fontStyle;
        var text =  getPoint(index)+" "+contents[index];
        ctx.fillText(text,-ctx.measureText(text).width-7.5-10,4.5);
        var img;
        if(!teamImgs[contents[index]]){
            teamImgs[contents[index]] = new Image();
            img = teamImgs[contents[index]];
            img.src = "img/team/"+contents[index]+".png";
            img.onload = function(){
                img.isLoad = true;
                ctx.save();
                ctx.translate(position.x,position.y);
                ctx.rotate(-(1-(radianArr[index]+radianArr[index+1])/2)*Math.PI);
                ctx.drawImage(img,0,0,img.width,img.height,-10,-7.5,img.width/2,img.height/2);
                ctx.restore();
            }
        }
        else{
            img = teamImgs[contents[index]];
            ctx.drawImage(img,0,0,img.width,img.height,-10,-7.5,img.width/2,img.height/2);
            ctx.restore();
        }
    }
    else{
        ellipse = dateEllipse;
        ctx.font = dateFontStyle;
        position = findPosition((radianArr[index]+radianArr[index+1])/2,ellipse);
        ctx.fillText(contents[index],position.x-parseInt(ctx.font.substr(4))/2,position.y+parseInt(ctx.font.substr(4))/2);
    }
    ctx.restore();
}
function getPoint(index){
    return points[15-index+teamStart];
}
function ellipseArc(ellipse,startRadian,endRadian,clockwise,ctx){
    if(typeof(clockwise)=="undefined"){
        clockwise = false;
    }
    ctx.save();
    ctx.scale(ellipse.a/ellipse.b,1);
    if(Math.abs(endRadian-startRadian)>=2-0.000001){
        ctx.arc(ellipse.center.x*ellipse.b/ellipse.a,ellipse.center.y,ellipse.b,0*Math.PI,2*Math.PI,clockwise);
    }
    else{
        var start = transformRadian(startRadian,ellipse);
        var end = transformRadian(endRadian,ellipse);
        ctx.arc(ellipse.center.x*ellipse.b/ellipse.a,ellipse.center.y,ellipse.b,start*Math.PI,end*Math.PI,clockwise);
    }
    ctx.restore();
}
function fillGridByIndex(index,color,ctx){
    if(color == "#f0f0f0"){
        fillGrid(radianArr[index]+0/180,radianArr[index+1]-0/180,ctx,color,smallEllipse,tieEllipse);
    }
    else{
        fillGrid(radianArr[index]+0/180,radianArr[index+1]-0/180,ctx,color,smallEllipse,innerEllipse,ctx);
    }
}
function fillGrid(startRadian,endRadian,ctx,color,small,large){
    color = color||"blue";
    small = small||smallEllipse;
    large = large||largeEllipse;
    ctx.save();
    ctx.beginPath();
    ctx.lineWidth = 3;
    var startHead = findPosition(startRadian,small);
    ctx.moveTo(startHead.x,startHead.y);
    ellipseArc(large,startRadian,endRadian,false,ctx);
    var endTrail = findPosition(endRadian,small);
    ctx.lineTo(endTrail.x,endTrail.y);
    ellipseArc(small,endRadian,startRadian,true,ctx);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
    ctx.restore();
}

function drawLines(arr,ctx,clockwise){
    if(!clockwise){
        for(var i=0;i<arr.length;i++){
            //drawLine(arr[i],"#FFFFFF",vsEllipse,vlEllipse);
            drawLine(arr[i],"#b5b5b5",ctx,vsEllipse,vlEllipse);//b5b5ab
        }
    }

}
function drawLine(radian,color,ctx,small,large){
    small = small||smallEllipse;
    large = large||largeEllipse;
    var head = findPosition(radian,small);
    var trail = findPosition(radian,large);
    var width =Math.sqrt((head.x-trail.x)*(head.x-trail.x)+(head.y-trail.y)*(head.y-trail.y));
    ctx.save();
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 1;
    ctx.moveTo(head.x,head.y);
    ctx.lineTo(trail.x,trail.y);
    ctx.stroke();
    ctx.restore();
}
function findPosition(radian,ellipse){
    var k = radian % 2;
    radian = k * Math.PI;
    var position = {};
    var x = Math.sqrt(1/(1/(ellipse.a*ellipse.a)+Math.tan(radian)*Math.tan(radian)/(ellipse.b*ellipse.b)));
    var y = x * Math.tan(radian);
    if(k > 0.5 && k <= 1.5){
        x = -x;
        y = -y;
    }
    position.x = x + ellipse.center.x;
    position.y = y + ellipse.center.y;
    return position;
}
function transformRadian(radian,ellipse){
    var position = findPosition(radian,ellipse);
    position.x = position.x * ellipse.b / ellipse.a;
    var center = {x:ellipse.center.x*ellipse.b/ellipse.a,y:ellipse.center.y};
    return getRadian(position,center);
}
function getRadian(position,center,isCircle){
    center = center||smallEllipse.center;
    if(typeof(isCircle) == "undefined"){
        isCircle = false;
    }
    var x = position.x - center.x;
    var y = position.y - center.y;
    var val = y/x;
    if(x<0){
        return 1 + Math.atan(val)/Math.PI;
    }
    if(y>=0){
        return Math.atan(val)/Math.PI;
    }
    return 2+Math.atan(val)/Math.PI;
}
function isInRing(position,small,large){
    small = small||smallEllipse;
    large = large||largeEllipse;
    if(isInEllipse(position,large) && !isInEllipse(position,small)){
        return true;
    }
    return false;
}
function isInEllipse(position,ellipse){
    if((position.x-ellipse.center.x)*(position.x-ellipse.center.x)/(ellipse.a*ellipse.a)+(position.y-ellipse.center.y)*(position.y-ellipse.center.y)/(ellipse.b*ellipse.b) < 1.00000){
        return true;
    }
    return false;
}
function getRelativePosition(ev){
    var x,y;
    if(ev.pageX || ev.pageY){
        x=ev.pageX-relativeDistance.x;
        y = ev.pageY-getScrollTop()-relativeDistance.y;
    }
    else{
        x = ev.clientX  - document.body.clientLeft-relativeDistance.x;
        y =ev.clientY  - document.body.clientTop-relativeDistance.y;
    };

    x = x/proportion;
    y = y/proportion;
    return {x:x,y:y};
}
function getScrollTop()
{
    var scrollTop=0;
    if(document.documentElement&&document.documentElement.scrollTop)
    {
        scrollTop=document.documentElement.scrollTop;
    }
    else if(document.body)
    {
        scrollTop=document.body.scrollTop;
    }
    return scrollTop;
}
function getRelativeDistance(canvas){
    var borderWidth = 0;
    relativeDistance.x = getElementLeft(canvas)+borderWidth;
    relativeDistance.y = getElementTop(canvas)+borderWidth;
}
function getElementLeft(element){
    var actualLeft = element.offsetLeft;
    var current = element.offsetParent;
    while(current !== null){
        actualLeft += current.offsetLeft;
        current = current.offsetParent;
    }
    return actualLeft;
}
function getElementTop(element){
    var actualTop = element.offsetTop;
    var current = element.offsetParent;
    while(current !== null){
        actualTop += current.offsetTop;
        current = current.offsetParent;
    }
    return actualTop;
}
function positionAlert(description,position){
    alert(description +":"+position.x+","+position.y);
}

function showCenter(matchArr){
    var dis = getCenterRelativeToPage();
    $("#center").css({"left":dis.x+"px","top":dis.y+"px"});
    var len = matchArr.length;
    var topData = topArr[len-1];
    var $div;
    var name;
    for(var i=0;i<len;i++){
        $div = $("#f"+(i+1));
        $div.css("top",topData.startTop+topData.gapTop*i+"px").show();
        name = matchArr[i]["hostTeam"];
        $div.attr("gameNums",matchArr[i]["id"]);
        $div.find(".left_team").html(name);
        if(teams.indexOf(name) == -1){
            $div.find(".team1").html("").hide();
            $div.find(".left_img").attr("src","img/team/question.png");
        }
        else{
            $div.find(".team1").html(team[name].group).show();
            $div.find(".left_img").attr("src","img/team/"+name+".png");
        }
        name = matchArr[i]["guestTeam"];
        $div.find(".right_team").html(name);
        if(teams.indexOf(name) == -1){
            $div.find(".team2").html("").hide();
            $div.find(".right_img").attr("src","img/team/question.png");
        }
        else{
            $div.find(".right_img").attr("src","img/team/"+name+".png");
            $div.find(".team2").html(team[name].group).show();
        }
        if(matchArr[i].score){
            $div.find(".score").css("left","228px");
            $div.find(".score").html(matchArr[i].score);
        }
        else{
            $div.find(".score").css("left","233px");
            $div.find(".score").html("VS");
        }
        var timeArr = matchArr[i]["time"].split(",");
        //alert(timeArr);
        $div.find(".time").html(timeArr[2]+":"+timeArr[3]);
        $div.find(".date").html(timeArr[0]+"."+timeArr[1]);
    }
}
$(".tv").click(function(){
    var id = $(this).closest(".rec").attr("gameNums");
    id = parseInt(id);
    var match = matchInfo["matches"][id];
    $("#showHref").show();
    var hostTeam = match["hostTeam"]||"?";
    var guestTeam = match["guestTeam"]||"?";
    var hrefArr = [];
    $("#teams").html(hostTeam+" VS "+guestTeam);
    if(match["score"] != ""){
        hrefArr = getJijin(match);
    }
    else{
        hrefArr = getHrefArr(hostTeam,guestTeam);
    }
    var len = hrefArr.length;
    if(len>3){
        len=3;
    }
    for(var i=0;i<len;i++){
        if(hrefArr[i]["url"].indexOf("http") == -1){
            hrefArr[i]["url"] = "http://www.zhibo8.com"+ hrefArr[i]["url"];
        }
        $("#url_"+(i+1)).attr("href",hrefArr[i]["url"]);
        $("#url_"+(i+1)).text(hrefArr[i]["title"]);
        $("#url_"+(i+1)).show();
    }
});
$("#close").click(function(){
    $("#showHref").hide();
    $(".url").hide();
});
function isOver(id){

}
function getJijin(match){
    var preffix = "http://www.zhibo8.cc/zuqiu/2012/";
    var suffix = "-jijin.htm";
    var hostTeam = match["hostTeam"];
    var hostTeamPinyin = pinyin[hostTeam];
    var timeArr = match["time"].split(",");
    var month,day;
    if(timeArr[0].length == 1){
        month = "0"+timeArr[0];
    }
    else if(timeArr[0].length == 2){
        month = timeArr[0];
    }
    else{
        return [];
    }
    if(timeArr[1].length == 1){
        day = "0"+timeArr[1];
    }
    else if(timeArr[1].length == 2){
        day = timeArr[1];
    }
    else{
        return [];
    }
    var mainInfo = month+day+"-"+hostTeamPinyin;
    var href = preffix+mainInfo+suffix;
    var hrefInfo = {};
    hrefInfo["url"] = href;
    hrefInfo["title"] = "比赛视频集锦";
    return [hrefInfo];
}
function getHrefArr(hostTeam,guestTeam){
    var liveArr = liveAddress["matches"];
    for(var i=0,len=liveArr.length;i<len;i++){
        if((liveArr[i]["hostTeam"]==hostTeam &&liveArr[i]["guestTeam"]==guestTeam)||(liveArr[i]["hostTeam"]==guestTeam&&liveArr[i]["guestTeam"]==hostTeam)){
            return liveArr[i]["hrefs"]||[];
        }
    }
    return [];
}
function getCenterRelativeToPage(){
    var ellipseCenter = {};
    ellipseCenter.x = center.x*proportion;
    ellipseCenter.y = center.y*proportion;
    var height = $("#center").height();
    var width = $("#center").width();
    var x = ellipseCenter.x  - width/2;
    var y = ellipseCenter.y - height/2;
    x = x + parseInt($("#backgroundCanvas").css("left"));
    return {x:x,y:y};
}