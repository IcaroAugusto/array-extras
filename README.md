# Node.js Array Extra methods

Those are some extra methods for the Array prototype in nodejs.
I will add to it any methods that I find useful, but that are not implemented by default.

## Installing

`npm install array-extra-methods`

## Implemented methods

* `Array.prototype.sample = function()`
  * Returns a random element from the array

* `Array.prototype.take = function()`
  * Returns a random element from the array and removes the element from it

* `Array.prototype.last = function()`
  * Returns the last element from the array

* `Array.prototype.shuffle = function()`
  * Shuffles the values of the array

* `Array.prototype.shuffled = function()`
  * Returns a copy of the array with shuffled elements

* `Array.prototype.swap = function(ind1, ind2)`
  * Swaps both values of an array

* `Array.prototype.high = function()`
  * Returns the last index of the array

* `Array.prototype.group = function(amount)`
  * Divides the array into "amount" groups, don't change the array

## Author

Ícaro Augusto

* [https://icaroaugusto.com](https://icaroaugusto.com)
* Discord: **IcaroAugusto#3303**

## Changelogs

### 1.0.0

Created.