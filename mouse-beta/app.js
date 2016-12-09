"use strict"
// Drawing circle

function update() {
  context.beginPath();
  context.arc(100, 100, 50, 0, 2 * Math.PI, true);
  context.fillStyle = "#FF6A6A";
  context.fill();
}
update();

// Listening for the mouse event

var mouseX = 0;
var mouseY = 0;

canvas.addEventListener("mousemove", setMousePosition, false);

function setMousePosition(e) {
  mouseX = e.clientX;
  mouseY = e.clientY;
}

// Mouse position

function setMousePosition(e) {
  mouseX = e.clientX;
  mouseY = e.clientY;
}

//Getting the Exact Mouse Position

function getPosition(el) {
  var xPosition = 0;
  var yPosition = 0;

  while (el) {
    xPosition += (el.offsetLeft - el.scrollLeft + el.clientLeft);
    yPosition += (el.offsetTop - el.scrollTop + el.clientTop);
    el = el.offsetParent;
  }
  return {
    x: xPosition,
    y: yPosition
  };
}
// Canvas Position

var canvasPos = getPosition(canvas);
var mouseX = 0;
var mouseY = 0;

canvas.addEventListener("mousemove", setMousePosition, false);

function setMousePosition(e) {
  mouseX = e.clientX - canvasPos.x;
  mouseY = e.clientY - canvasPos.y;
}

//Moving the Circle

function update() {
  context.beginPath();
  context.arc(100, 100, 50, 0, 2 * Math.PI, true);
  context.fillStyle = "#FF6A6A";
  context.fill();

  requestAnimationFrame(update);
}
update();

//With

function update() {
  context.beginPath();
  context.arc(mouseX, mouseY, 50, 0, 2 * Math.PI, true);
  context.fillStyle = "#FF6A6A";
  context.fill();
 
  requestAnimationFrame(update);
}
update();
