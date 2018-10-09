var canvas;
var maze;

function setup() {
  canvas = createCanvas(400, 400);
  canvas.parent('sketch-holder');
  background(51);
  stroke(255);

  maze = new Maze(0,0,20);
}

function draw() {
  maze.drawNext();
}

/* Helper Methods */
function pause(amount) {
  count = amount;
  while(count > 0) {
    count--;
  }
}
