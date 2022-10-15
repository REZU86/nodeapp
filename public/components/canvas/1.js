(function() {
    let canvaNUM = 1;
    let githublink = "rtee";
    let title = "ball 2";
    let canvas = document.getElementById(canvaNUM);
    let canvasOffset = canvas.getBoundingClientRect();
    let ctx;
    functions[canvaNUM] = [draw, false, githublink, title];
    let w;
    let h;
  function canvasSetup(canvas){
    ctx = canvas.getContext('2d');
    w = window.innerWidth;
    h = window.innerWidth*2.7/4;
    let ratio = window.innerWidth/canvasOffset.width;
    scale = window.devicePixelRatio;
    canvas.width = w * scale;
    canvas.height = h * scale;
    ctx.scale(scale*ratio, scale*ratio);
  }
  canvasSetup(canvas)
  
  function drawCircle(x){
    ctx.beginPath();
    ctx.arc(x,canvasOffset.height/2,10,0,2*Math.PI);
    ctx.fillStyle="red";
    ctx.fill();
  }
  var x = canvasOffset.width;
  
  requestAnimationFrame(draw)
  
  function draw(){ 
    
      ctx.clearRect(0,0,canvasOffset.width,canvasOffset.height);
  
      drawCircle(x%canvasOffset.width);
      x++;
      if(functions[canvaNUM][1]  == false) {return;}
           requestAnimationFrame(draw)
      
     
  }
  
  draw();
  
  })();