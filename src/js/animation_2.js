// The namespace for this application
// ()
var sketch2 = function(p) {

  p.i = 0;
  p.j = 0;

  


  p.setup = function() {
    var myCanvas2 = p.createCanvas(200, 400);
    myCanvas2.parent('animation-2');
    // p.frameRate(1);
    
  }

  p.draw = function() {
     p.stroke(62, 130, 255);
     p.strokeWeight(2);
     p.fill(176, 176, 176);

    // var scatter_width = p.random(200);
    // var scatter_height = p.random(400);

    // for (p.i = 0; p.i < 200; p.i += + 10){
    //   for (p.j = 0; p.j < 100; p.j += + 10) {
    //     p.rect(p.i, p.j, 50, 50);
    //   }
    // }
     
     p.rect(p.map(p.mouseX, 0, 200, 0, 200), p.map(p.mouseY, 0, 400, 0, 400), 50, 50);
 
  }
}

var myp5 = new p5(sketch2);