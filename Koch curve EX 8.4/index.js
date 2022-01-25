

//Canvas stuff
const canvas = document.getElementById("simulation-canvas");
const c = canvas.getContext('2d');

function factorial(n) {
  // let f = 1;

  // for(let i = 0; i < n; i++){
  //   f = f * (i+1);
  // }
  // return f;
  if (n == 1) {
    return 1;
  }
  else {
    return n * factorial(n-1);
  }
}

function drawCircle(x, y , radius){
  c.beginPath()
  c.arc(x, y , radius, 0, Math.PI*2 , false);
  c.closePath()
  c.stroke();
  if (radius > 10) {
    drawCircle(x + radius/2, y, radius/2);
    drawCircle(x - radius/2, y, radius/2);
    drawCircle(x, y + radius/2, radius/2);
    drawCircle(x, y - radius/2, radius/2);
    c.closePath
  }
}

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  drawCircle(canvas.width/2, canvas.height/2, canvas.height/2);
}
function init() {
  window.addEventListener('resize', resizeCanvas, false);
  resizeCanvas();
}
init()

// const renderLoop = () => {
//    pre.textContent = universe.render();
//    universe.tick();
 
//    requestAnimationFrame(renderLoop);
//  };