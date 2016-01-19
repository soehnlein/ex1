var r, g, b;

function setup() {
  var myCanvas=createCanvas(800,250);
  //link to id mySketch from header text
  myCanvas.parent('mySketch');
  r = 255;
  g = 255;
  b = 0;
  noLoop();
}

function draw() {
  var x = 0;
  while (x < width) {
    var y = 0;
    while (y < height) {
      noStroke();

      fill(r, g, b, random(125));

      rect(x,y,50,25);
      y += 25;
    }
    x += 50;
  }
}

function mousePressed() {
  r = random(255);
  g = random(255);
  b = random(255);
  clear();
  redraw();
}
