// The namespace for this application
// // ()

var sketch1 = function(p) {

  p.i = 0;
  p.j = 0;


  p.setup = function() {
    var myCanvas2 = p.createCanvas(200, 400);
    myCanvas2.parent('animation-1');
  }

  p.draw = function() {
     p.stroke(62, 130, 255);
     p.strokeWeight(2);
     p.fill(176, 176, 176);

    var seconds = p.millis()/1000;
     var change = p.map(p.sin(seconds), -1, 1, 0, 30);

    //  for (p.i = 0; p.i < 200; p.i += + 10){
    //   for (p.j = 0; p.j < 100; p.j += + 10) {
    //     p.ellipse(p.i, p.j, 50, 50);
    //   }
    // }

    for (p.n = 0; p.n < 500; p.n += 30){
      for (p.m = 0; p.m < 500; p.m += 30){
      p.ellipse(p.map(p.mouseX + p.n, 0, 200, 0, 200), p.map(p.mouseY + p.m, 0, 400, 0, 400), change, change);
      }
    }

     // p.ellipse(p.map(p.mouseX, 0, 200, 0, 200), p.map(p.mouseY, 0, 400, 0, 400), 50, 50);
 
  }
}

var myp5 = new p5(sketch1);


