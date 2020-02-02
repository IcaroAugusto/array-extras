//Returns a random element from the array
Array.prototype.sample = function() {
  return this[Math.floor(Math.random()*this.length)];
}

//Returns a random element from the array and removes the element from it
Array.prototype.take = function() {
  var index = Math.floor(Math.random()*this.length);
  var result = this[index];
  this.splice(index, 1);
  return result;
}

//Returns the last element from the array
Array.prototype.last = function() {
  return this[this.length-1];
}

//Shuffles the values of the array
Array.prototype.shuffle = function() {
  var currentIndex = this.length;
  var temporaryValue;
  var randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = this[currentIndex];
    this[currentIndex] = this[randomIndex];
    this[randomIndex] = temporaryValue;
  }
  return this;
}

//Returns a copy of the array with shuffled elements
Array.prototype.shuffled = function() {
  var result = this.slice();
  result.shuffle();
  return result;
}

//Swap two elements of the array
Array.prototype.swap = function(ind1, ind2) {
  var buffer = this[ind1];
  this[ind1] = this[ind2];
  this[ind2] = buffer;
}

//Returns the last index of the array
Array.prototype.high = function() {
  return this.length-1;
}

//Will divide the array into a group of 'amount' arrays
Array.prototype.group = function(amount) {
  var result = new Array(amount);
  for (var i = result.length - 1; i >= 0; i--) {
    result[i] = [];
  }
  var j = 0;
  for (var i = this.length - 1; i >= 0; i--) {
    result[j].push(this[i]);
    j++;
    if (j >= amount) j = 0;
  }
  return result;
}