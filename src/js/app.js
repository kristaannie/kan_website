// The namespace for this application
// // ()

var sketch1 = function(p) {

  p.setup = function() {
    var myCanvas2 = p.createCanvas(200, 400);
    myCanvas2.parent('animation-1');
  }

  p.draw = function() {
     p.stroke(62, 130, 255);
     p.strokeWeight(2);
     p.fill(176, 176, 176);
     p.ellipse(p.map(p.mouseX, 0, 200, 0, 200), p.map(p.mouseY, 0, 400, 0, 400), 50, 50);
 
  }
}

var myp5 = new p5(sketch1);


