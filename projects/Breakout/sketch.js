/* Constants */
var canvas;
var ball;
var paddle;
var bricks;
var stars;
var lives;
var starting;
var gameOver;
var paused;

function setup() {
  lives = 3;
  starting = true;
  gameOver = false;
  paused = false;
  initCanvas();
  intro();
}

function draw() {
  if(starting) {
    intro();
  } else if(!gameOver && !paused) {
    background(51);
    bricks.show();
    if(stars.allCaughtOrMiseed()) {
      checkWin();
    }
    ball.move();
    paddle.followMouse();
    paddle.checkHit(ball);
    stars.drop();
    for(var i = 0; i < stars.stars.length; i++) {
      if(paddle.collectsStar(stars.stars[i])) {
        showPassion(i);
      }
    }
    for(var i = 0; i < bricks.bricks.length; i++) {
      if(bricks.bricks[i].checkCollision(ball)) {
        stars.stars[i].falling = true;
      }
    }
    if(ball.y + ball.r > height) {
      loseLife();
    }
    gameStats();
  }
}

/* Initializers */
// Create the canvas
function initCanvas() {
  canvas = createCanvas(640, 640);
  canvas.parent('sketch-holder');
}

// Initialize the ball
function initBall() {
  ball = new Ball(width/2, height/2, 20);
  ball.show();
}

// Initialize the paddle
function initPaddle() {
  paddle = new Paddle(width / 2 - 50, height - 30, 100, 20);
  paddle.show();
}

// Initialize the bricks
function initBricks() {
  bricks = new Bricks();
  bricks.fill();
}

// Initialize the stars
function initStars() {
  stars = new Stars();
  stars.populate();
}

/* Game Play */
function intro() {
  background(51);
  noStroke();
  fill(212,240,255);
  textSize(32);
  text('Welcome to the Trent Ice Breaker Game!', 35, 150);
  text('Smash the ice and catch the stars', 90, 250);
  text('to learn about my passions', 140, 300);

  text("Press the 'space bar' to begin", 115, 400);
  text('Good luck!', 250, 450);
}

function loseLife() {
  lives--
  if(lives == 0) {
    lose();
  } else {
    console.log(lives);
    initBall();
  }
}

function gameStats() {
  noStroke();
  fill(212,240,255);
  textSize(20);
  text('Lives: ' + lives, 10, 25);
}

function checkWin() {
  if(stars.countCaught() === 6) {
    win();
  } else {
    lose();
  }
}
function win() {
  textSize(32);
  fill(212,240,255);
  text('You Won!', 250, 300);
  text('I hope you enjoyed breaking the ice', 80, 350)
  text("Press 'R' to Restart the Game", 120, 400);
  gameOver = true;
}

function lose() {
  textSize(32);
  fill(212,240,255);
  text('Game Over', 240, 300);
  text('You caught ' + stars.countCaught() + '/6 stars', 165, 350);
  text('Play Again To Get To Know Trent', 100, 400);
  text("Press 'R' to Restart the Game", 120, 450);
  gameOver = true;
}

function start() {
  initCanvas();
  initBall();
  initPaddle();
  initBricks();
  initStars();
  lives = 3;
  gameOver = false;
  starting = false;
}

function showPassion(which) {
  paused = true;
  if(which == 0) {
    push();
    fill(212,240,255);
    rect(40,40,560,560);
    textSize(32);
    fill(51);
    text("Technology", 200, 85);
    textSize(20);
    text('There is a reason I wrote this game instead of doing', 60, 140);
    text("something else. I sincerely think it's really fun! I'd ", 60, 165);
    text('rather code for an extra 5 hours than write another essay.', 60, 190);
    text('', 60, 225)
    text('Here are the three reasons I chose Computer Science:', 60, 260);
    text('1.) Scale -> I can help millions from one computer', 60, 310);
    text('2.) Diversity -> everything needs software', 60, 360);
    text('3.) Change -> new things to learn everyday', 60, 410);
    textSize(32);
    text("Hit 'C' to continue", 200, 580);
    pop();
  } else if(which == 1) {
    push();
    fill(212,240,255);
    rect(40,40,560,560);
    textSize(32);
    fill(51);
    text("New Year's Resolutions", 165, 85);
    textSize(20);
    text('I love having goals to pursue; here are mine this year:', 60, 140);
    text('', 60, 165);
    text('Intellectual: Learn Italian (get to 100% on Duolingo; be', 60, 200);
    text('able to read Italian news)', 60, 225)
    text('Strengthen Relationships: Call a long distance cousin once', 60, 285);
    text('a month', 60, 310);
    text('Improve Fitness: Weigh 168lbs; less than 10% body fat', 60, 370);
    text('', 60, 325);
    text('Deepen Culture: Listen to a new album from start to finish', 60, 430);
    text('every week', 60, 455);
    textSize(32);
    text("Hit 'C' to continue", 200, 580);
    pop();
  } else if(which == 2) {
    push();
    fill(212,240,255);
    rect(40,40,560,560);
    textSize(32);
    fill(51);
    text('Soccer', 270, 85);
    textSize(20);
    text('Soccer has always been a huge aspect of my life', 60, 140);
    text('Here is a look at my soccer timeline:', 60, 165);
    text('2000 - first micro league games', 60, 215);
    text('2006 - realized I was bad at every other sport', 60, 245);
    text('2011 - playing at the regional level / varsity soccer', 60, 275);
    text('2014 - lost in state cup championship (still hurts)', 60, 305);
    text('2017 - washed up now; just playing with PIKE now', 60, 335);
    text('2020 - assistant coaching a club team', 60, 365);
    text('2022 - coaching a club team of my own', 60, 395);
    text('2027 - our team wins state!', 60, 425)
    textSize(32);
    text("Hit 'C' to continue", 200, 580);
    pop();
  } else if(which == 3) {
    push();
    fill(212,240,255);
    rect(40,40,560,560);
    textSize(32);
    fill(51);
    text('Teaching', 240, 85);
    textSize(20);
    text('To me, one of the most rewarding things you', 60, 140);
    text('can do is teach someone about something you love', 60, 165);
    text('Here are a couple times that fueled this passion:', 60, 190);
    text('', 60, 215);
    text("-After school coding club at Belmont Elementary", 60, 240);
    text('', 60, 265);
    text('-1-on-1 coding mentor for 5th grader (Nathan is a beast)', 60, 290);
    text('', 60, 315);
    text('-Assistant coach for my lil bros soccer team', 60, 340);
    text('', 60, 365);
    text('-NHRI mentor for a 6th grader named Ben', 60, 390);
    text('^ have never beat him in 2K', 60, 415);
    text('', 60, 440);
    text('-After school soccer club at Belmont Elementary', 60, 465);
    text('', 60, 490);
    text('', 60, 515)
    textSize(32);
    text("Hit 'C' to continue", 200, 580);
    pop();
  } else if(which == 4) {
    push();
    fill(212,240,255);
    rect(40,40,560,560);
    textSize(32);
    fill(51);
    text('Being Unique', 215, 85);
    textSize(20);
    text('I enjoy authenticity in myself and others', 60, 140);
    text('Here are a handful of my weird quirks:', 60, 165);
    text('', 60, 190);
    text('1.) I have an irrational fear of hot drinks', 60, 215);
    text('', 60, 240);
    text('2.) I usually fall asleep flat on my back.. like', 60, 265);
    text('how you would lay someone down in a coffin', 60, 290);
    text('', 60, 315);
    text('3.) I average 2 burritos per week (typically Chipotle)', 60, 340);
    text('my record is 6 burritos in 6 days', 60, 365);
    text('', 60, 390);
    text('4.) I eat spinach raw because salad dressing grosses me out', 60, 415);
    text('', 60, 440);
    text('5.) I only wear weird socks (i.e. Manatees, Abe Lincoln,', 60, 465);
    text('Corgis with Scarves, Avocados, and Stegosaurus Tacos)', 60, 490);
    text('', 60, 515)
    textSize(32);
    text("Hit 'C' to continue", 200, 580);
    pop();
  } else if(which == 5) {
    push();
    fill(212,240,255);
    rect(40,40,560,560);
    textSize(32);
    fill(51);
    text('Family', 270, 85);
    textSize(20);
    text('Maureen (mom): Overwhelmingly positive and unmatched', 60, 140);
    text('hilarity. Favorite song lyric - "lend me some sugar, I am', 60, 165);
    text('your neighbor!"', 60, 190);
    text('Scott (dad): This guy is the most loyal person you will ever', 60, 230);
    text('meet. He loves wine, Ed Sheeran, and chest day.', 60, 255);
    text('Megan (sis): Honest to a fault, but extremely sincere. Skills', 60, 300);
    text('include: puzzling; eating Papa Johns and quoting Disney.', 60, 325);
    text('Cole (bro): Always pulls out the best qualities in others (total', 60, 380);
    text('sweetheart). He is the family pretty boy and soccer star.', 60, 405);
    textSize(32);
    text("Hit 'C' to continue", 200, 580);
    pop();
  }
}

function keyPressed() {
  if ((keyCode === 82 && gameOver) || (keyCode === 32 && starting)) {
    start();
  } else if(keyCode === 67) {
    console.log('continue');
    paused = false;
  }
}
