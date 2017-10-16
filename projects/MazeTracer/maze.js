
function Maze(xStart, yStart, wallLength) {

  this.x = 0;
  this.y = 0;
  this.wallLength = wallLength;

  this.drawNext = function() {
    stroke(255);
    if(random(1) < .5) {
      line(this.x, this.y, this.x + this.wallLength, this.y + this.wallLength);
    } else {
      line(this.x, this.y + this.wallLength, this.x + this.wallLength, this.y);
    }
    this.moveStroke();
  }

  this.moveStroke = function() {
    this.x += this.wallLength;
    if(this.x >= width) {
      this.y += this.wallLength;
      this.x = 0;
    }
  }
}
