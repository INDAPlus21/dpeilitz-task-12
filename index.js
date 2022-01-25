

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
//Example 8.2
function drawCircle(x, y , radius){
  c.beginPath()
  c.lineWidth = 1;
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
// Example 8.3
function cantor(x, y, len)  {
  if (len >= 1) {
    c.beginPath()
    c.lineWidth = 10;
    c.moveTo(x,y)
    c.lineTo(x+len, y)
    c.stroke()
    y+= 20;
    cantor(x,y, len/3);
    cantor(x+len*2/3, y, len/3);
  }
}

//Example 8.4
//Koch line contains x0, y0, x1, y1 of a line to imitate a PVector
let kochLine = [];
let kochArray;

function koch_point(x, start){
  let out = [];
  //if the start condition is given, return start point. Else return end point
  if(start == true){
    out.push(x[0]);
    out.push(x[2]);
  }
  else{
    out.push(x[1]);
    out.push(x[3]);
  }
  return out;
}

function trees(x, y, angle, len, width){
  //draw line
  c.lineWidth = width;
  c.beginPath();
  c.save()
  c.rotate(angle * Math.PI/180);
  c.moveTo(x,y);
  c.lineTo(x, y-len);
  c.stroke()
  c.translate(x, y-len);
  
  if (len < 2){
    c.restore();
    return;
  }
  trees(0, 0, +45, len*0.7, width-1);
  trees(0, 0, -45, len*0.7, width-1);


  c.restore()
}


function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  drawCircle(canvas.width/2, canvas.height/2, canvas.height/2);
}

let selected = document.getElementById("selection");

selected.onchange = function() {
  let x = document.getElementById("selection").value;
  if (x == "circles"){
    c.clearRect(0, 0, canvas.width, canvas.height);
    drawCircle(canvas.width/2, canvas.height/2, canvas.height/2);
  }
  if (x == "cantor"){
    c.clearRect(0, 0, canvas.width, canvas.height);
    cantor(0, canvas.height/2, canvas.width);
  }
  if (x == "trees"){
    c.clearRect(0, 0, canvas.width, canvas.height);
    trees(canvas.width/2, canvas.height, 0, canvas.height/4, 10);
  }
}

function init() {
  resizeCanvas();
  drawCircle(canvas.width/2, canvas.height/2, canvas.height/2);
 
}
init()