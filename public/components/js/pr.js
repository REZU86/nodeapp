
(function() {
let canvas = document.getElementById("space")
let ctx;
var canvasOffset = canvas.getBoundingClientRect();

var w;
var h;
var arr = []
var particles =150;
var distanc = 150;

var sp = 0.05;
var sp1= 0.30
var scale;
var MouseSpeedX;
var MouseSpeedY;

var currentPosition = {x:0, y:0};
var previousPosition = [{x:0, y:0}];

function canvasSetup(canvas){
   ctx = canvas.getContext('2d');
   w = window.innerWidth;
   h = window.innerHeight;
   canvas.style.width = w + "px";
   canvas.style.height = h + "px";

   scale = window.devicePixelRatio;
   canvas.width = w * scale;
   canvas.height = h * scale;
   ctx.scale(scale, scale);
}
class Circle {
  constructor(x, y,size, vx, vy) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.size = size;
    this.peers =  Math.floor(random(3, 7));
    this.fullpeer = false;
  }
}
function distance(x1,y1,x2,y2){ 
  if(!x2) x2=0; 
  if(!y2) y2=0;
  return Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1)); 
}
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}

function random(min, max) {
  
  var num = (Math.random() * (max - min ) + min);
  if(num < sp && num > 0) { num = sp}
  if(num > -sp && num <=0) { num = -sp}
  return num;
}

function point(Circle){

  ctx.beginPath();
  ctx.arc(Circle.x, Circle.y, Circle.size, 0, 2 * Math.PI, true);
  
  ctx.fillStyle = "#fefefe50";
  ctx.fill();
  if(Circle.x >= Circle.size/2 && Circle.x <= w - Circle.size/2  ){
    Circle.x += Circle.vx
  }else{
    Circle.vx*=-1;
    Circle.x += Circle.vx
  }
  
  if(Circle.y >= Circle.size/2 && Circle.y <= h - Circle.size/2  ){
    Circle.y += Circle.vy
  }else{
    Circle.vy*=-1;
    Circle.y += Circle.vy 
  }
}
function line(x1, y1, x2, y2, d){
  ctx.beginPath();
  ctx.moveTo(x2, y2);
  ctx.lineTo(x1, y1);
  ctx.lineWidth = d;
  ctx.strokeStyle = '#fefefe80';
  ctx.stroke();
  ctx.closePath;
}

function setup(){
  canvasSetup(canvas)
  for (let i = 0; i < particles; i++) {
    
    arr.push(new Circle(random(0,w), random(0,h), 2.5, random(-sp1,sp1), random(-sp1, sp1)))
  }
  shuffleArray(arr)
  
}
setup()
var ft = 0;
function draw(){
  canvasSetup(canvas)
  ctx.clearRect(0,0,w,h);  
  canvas.onmousemove = function(e){

    currentPosition = {
        x: e.clientX ,
        y: e.clientY
    };
    
  };
previousPosition.push(currentPosition)
var speedX = currentPosition.x - previousPosition[0].x;
var speedY = currentPosition.y - previousPosition[0].y;

  for (let i = 0; i < particles; i++) {
    point(arr[i])

    arr[i].x += (speedX)/(arr[i].peers*arr[i].peers*2);
    arr[i].y += (speedY)/(arr[i].peers*arr[i].peers*2);
  }
  ft++
  var count = 0;
  let currentPeer = 0;

  for (let j = 0; j < particles; j++) {
    let x1 = arr[j].x;
    let y1 = arr[j].y;
    
    for (let i = 0; i < particles; i++) {

      if(arr[i] == arr[j]) continue;

      let x2 = arr[i].x ;
      let y2 =  arr[i].y ;

      currentPeer = distance(x1,y1, x2, y2);
      
      if( currentPeer < distanc && count < 5 ){
        count++;
        line(x1, y1, x2, y2 , (1 - currentPeer/distanc)*0.5);
      }
    }
    count = 0;
  }
   
      requestAnimationFrame(draw);
    
       
  
  previousPosition.shift()
  gotop()
}
draw()
 

function gotop(){
  if(document.all[0].scrollTop === 0) {
    document.getElementById("backToTop").style.opacity = "0";
    document.getElementById("backToTop").style.visibility= "hidden";
  }else{
    document.getElementById("backToTop").style.opacity = 1;
    document.getElementById("backToTop").style.visibility = "visible";
  }
}

})();
