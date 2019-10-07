function setup() {
  createCanvas(800, 800);
  colorMode(HSB, width, height, 100);
}

function draw() {
  var y = random(height);
  
  for (var x=1; x<= width; x+=1) {
      stroke(x, y, 100);
      line(x, y, x-100, y);
    
  }
}
