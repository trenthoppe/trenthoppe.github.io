function Ball(x, y, r) {
  this.x = x;
  this.y = y;
  this.r = r;
  var goodAngles = [2.9]
  this.xVel = random(goodAngles);
  this.yVel = 3;

  this.move = function() {
    this.checkBounce();
    this.x += this.xVel;
    this.y += this.yVel;
    this.show();
  }

  this.setSpeed = function(xVel, yVel) {
    this.xVel = xVel;
    this.yVel = yVel;
  }

  this.show = function() {
    noStroke();
    fill(212,240,255);
    ellipse(this.x, this.y, this.r * 2);
  }

  this.checkBounce = function() {
    if(this.y - this.r < 0) {
      this.yVel = -this.yVel;
    } else if(this.x - this.r < 0 || this.x + this.r > width) {
      this.xVel = -this.xVel;
    }
  }
}
