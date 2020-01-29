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