function Brick(x, y, w, h) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.alive = true;

  this.checkCollision = function(ball) {
    if(!this.alive) {
      console.log("Dead");
      return false;
    }
    if(this.hitTopOrBottom(ball.x - ball.r, ball.y - ball.r)
      || this.hitTopOrBottom(ball.x - ball.r, ball.y + ball.r)
      || this.hitTopOrBottom(ball.x + ball.r, ball.y - ball.r)
      || this.hitTopOrBottom(ball.x + ball.r, ball.y + ball.r)
      || this.hitTopOrBottom(ball.x, ball.y - ball.r)
      || this.hitTopOrBottom(ball.x, ball.y + ball.r)
      || this.hitTopOrBottom(ball.x + ball.r, ball.y)
      || this.hitTopOrBottom(ball.x - ball.r, ball.y)) {
        console.log("hit top or bottom");
        this.alive = false;
        ball.setSpeed(ball.xVel, -ball.yVel);
        return true;
    } else if(this.hitSide(ball.x - ball.r, ball.y - ball.r)
      || this.hitSide(ball.x - ball.r, ball.y + ball.r)
      || this.hitSide(ball.x + ball.r, ball.y - ball.r)
      || this.hitSide(ball.x + ball.r, ball.y + ball.r)
      || this.hitSide(ball.x, ball.y - ball.r)
      || this.hitSide(ball.x, ball.y + ball.r)
      || this.hitSide(ball.x + ball.r, ball.y)
      || this.hitSide(ball.x - ball.r, ball.y)) {
        console.log("hit side");
        this.alive = false;
        ball.setSpeed(-ball.xVel, ball.yVel);
        return true;
    }
    return false;
  }

  this.hitTopOrBottom = function(x, y) {
    var withinWidth = x >= this.x && x <= this.x + this.w;
    var hitTop = y >= this.y && y <= this.y + 10;
    var hitBottom = y <= this.y + this.h && y >= this.y + this.h - 10;
    return withinWidth && (hitTop || hitBottom);
  }

  this.hitSide = function(x, y) {
    var withinHeight = y <= this.y && y >= this.y - this.h;
    var hitLeft = x >= this.x && x <= this.x + 10;
    var hitRight = x <= this.x + this.w && this.x >= this.x + this.w - 10;
    return withinHeight && (hitLeft || hitRight);
  }

  this.show = function() {
    noStroke();
    fill(255);
    rect(this.x, this.y, this.w, this.h);
  }
}

function Bricks() {
  this.spacing = 10;
  this.bricks = [];

  this.fill = function() {
    for(var i = 0; i < 3; i++) {
      this.bricks[i] = new Brick(150 + i*100 + i*10, 80, 100, 50);
    }
    for(var i = 0; i < 2; i++) {
      this.bricks[i+3] = new Brick(200 + i*100 + i*10, 140, 100, 50);
    }
    this.bricks[5] = new Brick(260, 200, 100, 50);
  }

  this.allDead = function() {
    for(var i = 0; i < this.bricks.length; i++) {
      if(this.bricks[i].alive) {
        return false;
      }
    }
    return true;
  }

  this.show = function() {
    for(var i = 0; i < this.bricks.length; i++) {
      if(this.bricks[i].alive) {
        this.bricks[i].show();
      }
    }
  }
}
