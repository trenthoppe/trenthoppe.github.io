Perceptron p;
Point[] points = new Point[100];

void setup() {
  size(400, 400);
  p = new Perceptron();
  
  for(int i = 0; i < points.length; i++) {
    points[i] = new Point();
  }
  
  float[] inputs = {-1, 0.5};
  int guess = p.guess(inputs);
  println(guess);
  
  
}

void draw() {
  stroke(0);
  line(0,0,width,height);
  for(int i = 0; i < points.length; i++) {
    points[i].show();
  }
}