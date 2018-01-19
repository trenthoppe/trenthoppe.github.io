function Star(x, y) {
  this.x = x;
  this.y = y;
  this.falling = false;
  this.caught = false;
  this.missed = false;

  this.drop = function() {
    if(this.falling = true && !this.caught) {
      this.y += 2;
      this.show();
    }
    if(this.y > height) {
      this.missed = true;
      this.falling = false;
    }
  }

  this.show = function() {
    noStroke();
    fill(255,255,0);
    starShape(this.x, this.y, 15, 35, 5);
  }

}

function Stars() {
  this.stars = [];

  this.populate = function() {

    for(var i = 0; i < 3; i++) {
      this.stars[i] = new Star(200 + i*100 + i*10, 105);
    }
    for(var i = 0; i < 2; i++) {
      this.stars[i+3] = new Star(250 + i*100 + i*10, 165);
    }
    this.stars[5] = new Star(310, 225);
  }

  this.drop = function() {
    for(var i = 0; i < this.stars.length; i++) {
      if(this.stars[i].falling) {
        this.stars[i].drop();
      }
    }
  }

  this.countCaught = function() {
    var caught = 0;
    for(var i = 0; i < this.stars.length; i++) {
      if(this.stars[i].caught) {
        caught++;
      }
    }
    return caught;
  }

  this.countMissed = function() {
    var missed = 0;
    for(var i = 0; i < this.stars.length; i++) {
      if(this.stars[i].missed) {
        missed++;
      }
    }
    return missed;
  }

  this.allCaughtOrMiseed = function() {
    for(var i = 0; i < this.stars.length; i++) {
      if(!this.stars[i].caught && !this.stars[i].missed) {
        return false;
      }
    }
    return true;
  }
}

function starShape(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
