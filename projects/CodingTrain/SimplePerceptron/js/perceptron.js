function Perceptron(n, c) {
  // Array of weights for inputs
  this.weights = new Array(n);
  // Start with random weights
  for (var i = 0; i < this.weights.length; i++) {
    this.weights[i] = random(-1,1);
  }
  this.c = c; // learning rate/constant
}

// Function to train the Perceptron
// Weights are adjusted based on "desired" answer
Perceptron.prototype.train = function(inputs, desired) {
  // Guess the result
  var guess = this.feedforward(inputs);
  // Compute the factor for changing the weight based on the error
  // Error = desired output - guessed output
  // Note this can only be 0, -2, or 2
  // Multiply by learning constant
  var error = desired - guess;
  // Adjust weights based on weightChange * input
  for (var i = 0; i < this.weights.length; i++) {
    this.weights[i] += this.c * error * inputs[i];
  }
}

// Guess -1 or 1 based on input values
Perceptron.prototype.feedforward = function(inputs) {
  // Sum all values
  var sum = 0;
  for (var i = 0; i < this.weights.length; i++) {
    sum += inputs[i] * this.weights[i];
  }
  // Result is sign of the sum, -1 or 1
  return this.activate(sum);
}

Perceptron.prototype.activate = function(sum) {
  if (sum > 0) return 1;
  else return -1;
}

// Return weights
Perceptron.prototype.getWeights = function() {
  return this.weights;
}
