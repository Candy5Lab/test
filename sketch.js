function setup() {
  createCanvas(windowWidth, windowHeight/2);
}

function draw() {
  background(255);
  noStroke()
  // Nose
  fill(232,177,51)
  triangle(width/2, height/2, width/2+30, height/2, width/2+30, height/2-60);
  
  //Eye
  fill(random(255),random(50),random(255))
  circle(width/2+70, height/2-45,20);
  //hair
  fill(39,38,98)
  arc(width/2+130, height/2-200, 140,320, HALF_PI, PI);
  arc(width/2-90, height/2-200, 300,300, 0, HALF_PI);
  rect(width/2+120,height/2-200,80,320)
  
  //rightear
  fill(255)
  circle(width/2+130,height/2,50)
  
  
  
  //Mouth
  noFill()
  strokeWeight(6)
  stroke(184,79,120)
  triangle(width/2+20, height/2+25, width/2+80, height/2+30, width/2+45, height/2+45);
  
  //face
  noFill()
  strokeWeight(10)
  stroke(95,136,142)
  arc(width/2+10, height/2+20, 130,170, HALF_PI, PI);
  arc(width/2-60, height/2-2, 45, 45, HALF_PI, PI + QUARTER_PI);
  
  
}