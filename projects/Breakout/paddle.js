function Paddle(x, y, w, h) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;

  this.followMouse = function() {
    if(mouseX - this.w / 2 > 0 && mouseX + this.w / 2< width) {
      this.x = mouseX - this.w / 2;
    }
    this.show();
  }

  this.checkHit = function(ball) {
    if((this.hitPaddle(ball.x - ball.r, ball.y - ball.r)
      || this.hitPaddle(ball.x - ball.r, ball.y + ball.r)
      || this.hitPaddle(ball.x + ball.r, ball.y - ball.r)
      || this.hitPaddle(ball.x + ball.r, ball.y + ball.r)
    ) && ball.yVel > 0) {
        ball.setSpeed(ball.xVel, -ball.yVel);
      }
  }

  this.collectsStar = function(star) {
    if(this.hitPaddle(star.x, star.y) && !star.caught) {
      star.caught = true;
      return true;
    }
    return false;
  }

  this.show = function() {
    noStroke();
    fill(212,240,255);
    rect(this.x, this.y, this.w, this.h, 50);
  }

  this.hitPaddle = function(x, y) {
    return x >= this.x && x <= (this.x + this.w) && y >= this.y && y <= this.y + this.h;
  }
}
