// The namespace for this application
// // ()
// function setup() {
//   var myCanvas = createCanvas(200, 400);
//   myCanvas.parent('animation-1');
// }

// function draw() {
//    stroke(map(mouseX, 0, windowWidth, 0, 255), 100, 255);
//    fill(176, 176, 176);
//    ellipse(map(mouseX, 0, 200, 0, 200), map(mouseY, 0, 400, 0, 400), 50, 50);
 
// }

var sketch1 = function(p) {

  p.setup = function() {
    var myCanvas2 = p.createCanvas(200, 400);
    myCanvas2.parent('animation-1');
  }

  p.draw = function() {
     p.stroke(p.map(p.mouseX, 0, p.windowWidth, 0, 255), 100, 255);
     p.fill(176, 176, 176);
     p.ellipse(p.map(p.mouseX, 0, 200, 0, 200), p.map(p.mouseY, 0, 400, 0, 400), 50, 50);
 
  }
}

var myp5 = new p5(sketch1);