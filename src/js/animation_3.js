// The namesbace for this ablication
// ()
var sketch3 = function(p){

	p.i = 10;

  	p.setup = function() {
	    var myCanvas2 = p.createCanvas(200, 200);
	    myCanvas2.parent('animation-3');
	}

  	p.draw = function() {
  		p.background(176, 176, 176);
  		var seconds = p.millis()/1000;
  		var change = p.map(p.sin(seconds / 10), -1, 1, 0, 30);

     	p.stroke(62, 130, 255);
     	p.strokeWeight(2);
     // p.fill(176, 176, 176);
     // p.rect(p.map(p.mouseX, 0, 200, 0, 200), p.map(p.mouseY, 0, 400, 0, 400), 50, 50);

     	p.noFill();
     	p.stroke(62, 130, 255);
     		
	    for (p.i = 10; p.i < 400; p.i += change + 10){
	      p.ellipse(0, 0, 20 + p.i);
	  	}
	}

}

var myp5 = new p5(sketch3);
