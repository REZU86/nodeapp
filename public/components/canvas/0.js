

(function() {
  
  var NUM_PARTICLES = ( ( ROWS = 80 ) * ( COLS = 140 ) ),
  THICKNESS = Math.pow( 80, 2 ),
  SPACING = 3,
  MARGIN = 100,
  COLOR = 250,
  DRAG = 0.95,
  EASE = 0.25,
  
  

  container,
  particle,
  canvas,
  mouse,
  canvasOffset,
  stats,
  list,
  ctx,
  tog,
  man,
  dx, dy,
  mx, my,
  d, t, f,
  a, b,
  i, n,
  w, h,
  p, s,
  r, c
  ;

particle = {
vx: 0,
vy: 0,
x: 0,
y: 0
};
let canvaNUM = 0;
let githublink = "rtee";
let title = "ball 2";
functions[canvaNUM] = [step, false, githublink, title];
function init() {
 
  
  canvas = document.getElementById( canvaNUM );
  man = false;
  tog = true;


list = [];

function canvasSetup(canvas){
  ctx = canvas.getContext('2d');
  canvasOffset = canvas.getBoundingClientRect();
  w = window.innerWidth;
  h = window.innerWidth*2.7/4;
  let ratio = window.innerWidth/canvasOffset.width;
  scale = window.devicePixelRatio;
  canvas.width = w/ratio;
  canvas.height = h/ratio; 
  ctx.scale(scale, scale);
}
canvasSetup(canvas);


for ( i = 0; i < NUM_PARTICLES; i++ ) {
  
  p = Object.create( particle );
  p.x = p.ox = MARGIN + SPACING * ( i % COLS );
  p.y = p.oy = MARGIN + SPACING * Math.floor( i / COLS );
  
  list[i] = p;
}

canvas.addEventListener( 'mousemove', function(e) {

  canvasOffset = canvas.getBoundingClientRect();
  mx = e.clientX - canvasOffset.left;
  my = e.clientY - canvasOffset.top;
  man = true;
  
});



}
requestAnimationFrame(step)
function step() {
  
if ( stats ) stats.begin();

if ( tog = !tog ) {

  if ( !man ) {

    t = +new Date() * 0.001;
    mx = w * 0.5 + ( Math.cos( t * 2.1 ) * Math.cos( t * 0.9 ) * w * 0.45 );
    my = h * 0.5 + ( Math.sin( t * 3.2 ) * Math.tan( Math.sin( t * 0.8 ) ) * h * 0.45 );
  }
    
  for ( i = 0; i < NUM_PARTICLES; i++ ) {
    
    p = list[i];
    
    d = ( dx = mx - p.x ) * dx + ( dy = my - p.y ) * dy;
    f = -THICKNESS / d;

    if ( d < THICKNESS ) {
      t = Math.atan2( dy, dx );
      p.vx += f * Math.cos(t);
      p.vy += f * Math.sin(t);
    }

    p.x += ( p.vx *= DRAG ) + (p.ox - p.x) * EASE;
    p.y += ( p.vy *= DRAG ) + (p.oy - p.y) * EASE;

  }

} else {

  b = ( a = ctx.createImageData( w, h ) ).data;

  for ( i = 0; i < NUM_PARTICLES; i++ ) {

    p = list[i];
    b[n = ( ~~p.x + ( ~~p.y * w ) ) * 4] = b[n+1] = b[n+2] = COLOR, b[n+3] = 255;
  }

  ctx.putImageData( a, 0, 0 );
}

if ( stats ) stats.end();
if(functions[canvaNUM][1]  == false) {return;}
requestAnimationFrame( step );
}

init();
step();
})();
