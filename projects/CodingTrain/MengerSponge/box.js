function Box(_x, _y, _z, _r) {
  this.pos = createVector(_x, _y, _z);
  this.r = _r;

  this.generate = function() {
    var boxes = [];
    for(var x = -1; x < 2; x++) {
      for(var y = -1; y < 2; y++) {
        for(var z = -1; z < 2; z++) {
          var newR = this.r / 3;
          var sum = abs(x) + abs(y) + abs(z);

          if(sum > 1) {
            var b = new Box(this.pos.x + x * newR, this.pos.y + y * newR, this.pos.z + z * newR, newR);
            boxes.push(b);
          }
        }
      }
    }
    return boxes;
  }

  this.show = function() {
    push();
    translate(this.pos.x, this.pos.y, this.pos.z);

    stroke(0);
    noStroke();
    fill(255);
    pointLight(204, 204, 204, 50, .5, .5, 0);
    box(this.r);
    pop();
  }
}
