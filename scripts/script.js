let score = 0;
var carX = getPosition(document.getElementById("car")).x;
var carY = getPosition(document.getElementById("car")).y;
var area = document.getElementsByTagName('area');
var life = 15;
var msg = document.getElementById('msg');
var msgtxt = document.getElementById('txtmsg');
/*document.body.addEventListener("mouseover", function mouse_position()
{
    var e = window.event;

    var posX = e.clientX;
    var posY = e.clientY;

    var coor = "Coordinates: (" + posX + "," + posY + ")";
    document.getElementById("coord").innerHTML = coor;

    setTimeout("mouse_position()",100);

});*/

document.getElementById("life").innerHTML = "Life : "+life;
document.getElementById("score").innerHTML = "Score : "+score;

for (var i = 0; i < area.length; i++) {
    area[i].addEventListener('mouseover',function(){
      life --;
      document.getElementById("life").innerHTML = "Life : <span id='num-score'>"+life+"</span>";
      if (life === 0) {
        msg.style.display = "block";
        msgtxt.innerHTML = "TOO BAD ! The game is done. Your score is "+score+" !";
        life = 15;
        score = 0;
        document.getElementById("life").innerHTML = "Life : <span id='num-life'>"+life+"</span>";
      }
    },false);
}
document.getElementById("btn-msg-done").addEventListener("click", function (){
msg.style.display = "none";

});

document.getElementById("div").addEventListener("mousemove", function(){
  score ++;
  document.getElementById('score').innerHTML = "Score : "+score;
});
/*
var car = document.getElementById("car");
var left = 195;
var bottom = 150;
car.style.right = left+"px";
car.style.bottom = bottom+"px";

document.onkeydown = checkKey;
*/

function checkKey(e) {

    e = e || window.event;
    car.style.transition = "0.1s";

    if (e.keyCode == '38') { // up
        car.style.transform = "rotate(0deg)";
        car.style.bottom = bottom+10+"px";
        bottom+=10;
    }
    else if (e.keyCode == '40') { // down
      car.style.transform = "rotate(180deg)";
      car.style.bottom = bottom-10+"px";
      bottom-=10;
    }

    else if (e.keyCode == '37') { // right
       car.style.transform = "rotate(270deg)";
       car.style.right = left+10+"px";
       left +=10;
    }
    else if (e.keyCode == '39') { // left
       car.style.transform = "rotate(90deg)";
       car.style.right = left-10+"px";
       left -=10;
    }

}
/*
document.getElementById("left").addEventListener("click",function(){
  car.style.transform = "rotate(135deg)";
  car.style.bottom = bottom-10+"px";
  car.style.right = left-10+"px";
  bottom-=10;
  left-=10;
});
document.getElementById("right").addEventListener("click",function(){
car.style.transform = "rotate(90deg)";
});
document.getElementById("turn_left").addEventListener("click",function(){
  car.style.transform = "rotate(-90deg)";
});
document.getElementById("turn_right").addEventListener("click",function(){
  car.style.transform = "rotate(90deg)";
});
document.getElementById("up").addEventListener("click",function(){
  car.style.bottom = bottom+10+"px";
});
document.getElementById("down").addEventListener("click",function(){
  car.style.bottom = bottom-10+"px";
});
*/

function getPosition(el) {
  var xPos = 0;
  var yPos = 0;

  while (el) {
    if (el.tagName == "BODY") {
      // deal with browser quirks with body/window/document and page scroll
      var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
      var yScroll = el.scrollTop || document.documentElement.scrollTop;

      xPos += (el.offsetLeft - xScroll + el.clientLeft);
      yPos += (el.offsetTop - yScroll + el.clientTop);
    } else {
      // for all other non-BODY elements
      xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
      yPos += (el.offsetTop - el.scrollTop + el.clientTop);
    }

    el = el.offsetParent;
  }
  return {
    x: xPos,
    y: yPos
  };
}
document.querySelector("#image").addEventListener("click", function(){
  this.style.cursor = "url('car3.png'), auto";
});
