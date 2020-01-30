//Returns a random element from the array
Array.prototype.sample = function() {
  return this[Math.floor(Math.random()*this.length)];
}

//Returns a random element from the array and deletes it
Array.prototype.pick = function() {
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