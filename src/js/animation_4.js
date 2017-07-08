// The namesbace for this ablication
// ()
// var sketch4 = function(p){

// 	// p.i = 10;

//     // var moon;

//     p.preload = function(){
//       // moon = p.loadImage("../moon.png");
//     }


//   	p.setup = function() {
// 	    var myCanvas2 = p.createCanvas(p.windowWidth, 200);
// 	    myCanvas2.parent('call-to-action');
//       p.textFont("Abril Fatface");
// 	   }

//   	p.draw = function() {
//   		p.background(176, 176, 176);
//   		var seconds = p.millis()/1000;
//   		var change = p.map(p.sin(seconds / 10), -1, 1, 0, 30);

//       moonRise = p.map(p.sin(seconds * 2), -1, 1, -100, 200);
 
//       // p.image(moon, p.windowWidth/2, p.windowHeight/2 + moonRise, p.windowWidth/1.2, p.windowWidth/1.2);

//       p.fill(89, 195, 234, 200);
//       p.noStroke();
//       p.triangle (0, p.height, p.width/4 + change, p.height/1.2, p.width/2, p.height);

//      	p.stroke(62, 130, 255);
//      	p.strokeWeight(2);
//       p.fill(176, 176, 176);
//       p.rect(p.map(p.mouseX, 0, 200, 0, 200), p.map(p.mouseY, 0, 400, 0, 400), 50, 50);

//      	p.noFill();
//      	p.stroke(62, 130, 255);
     		
// 	    for (p.i = 10; p.i < 400; p.i += change + 10){
// 	      p.ellipse(0, 0, 20 + p.i);
// 	  	}
// 	}

// }

// var myp5 = new p5(sketch4);





// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   textFont("Abril Fatface");
// }

// lastTimeChanged = null;
// poemIndex = 0;

// function draw() {
//   background(125, 171, 177); 
  
//   seconds = millis()/1000;
//   change = map(sin(seconds * 2), -1, 1, 0, 50);
  
//   moonRise = map(sin(seconds * .1), -1, 1, -100, 200);
 
//   image(moon, windowWidth/2, windowHeight/2 + moonRise, windowWidth/1.2, windowWidth/1.2);
 
//   noTint();
//   fill(89, 195, 234, 200);
//   noStroke();
//   triangle (0, height, width/4 + change, height/1.2, width/2, height);
//   fill(89, 195, 255, 200);
//   triangle (width/4, height, width/2, height/1.3 + change * 2, width/1.6 + change, height);
//   fill(89, 180, 234, 200);
//   triangle (width/2, height, width/1.4, height/1.2 + (change * - 1.1), width/1.1, height);
//   fill(89, 195, 234, 200);
//   triangle (width/1.5, height, width/1.1, height/1.2 + (change * .5), width, height);
 
//   tint(200,60);
//   imageMode(CENTER);
