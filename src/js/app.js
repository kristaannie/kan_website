// The namespace for this application
// ()
function setup() {
  var myCanvas = createCanvas(200, 400);
  myCanvas.parent('animation-1');
}

function draw() {
   stroke(map(mouseX, 0, windowWidth, 0, 255), 100, 255);
   fill(176, 176, 176);
   ellipse(map(mouseX, 0, 200, 0, 200), map(mouseY, 0, 400, 0, 400), 50, 50);
 
}