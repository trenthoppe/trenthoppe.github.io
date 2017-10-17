var canvas;
var sponge = [];
var a = 0;

function setup() {
  // Initialize 3D canvas
  canvas = createCanvas(400, 400, WEBGL);
  canvas.parent('sketch-holder');

  // Make initial sponge
  var b = new Box(0, 0, 0, 200);
  sponge.push(b);
}

function draw() {
  background(51);

  rotateX(a);
  rotateY(a*.2);
  rotateZ(a*.1);

  for(var i = 0; i < sponge.length; i++) {
    sponge[i].show();
  }
  a += .01
}

function mousePressed() {
  var next = [];
  for(var i = 0; i < sponge.length; i++) {
    var b = sponge[i];
    var bNext = b.generate();
    next = next.concat(bNext);
  }
  sponge = next;
}
