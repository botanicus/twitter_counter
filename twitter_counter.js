/*
var counter = new TwitterCounter("textarea-with-counter", "show-counter", 140);
*/

TwitterCounter = function (element, counter, maxLength) {
  if (!element) {
    var up = new Error("Element has to be provided!");
    throw up; // ha ha
  };

  if (!counter) {
    var up = new Error("Counter element has to be provided!");
    throw up;
  };

  this.element   = element;
  this.counter   = counter;
  this.maxLength = maxLength || 140;
  this.setLength();
};

TwitterCounter.prototype.setLength = function setLength () {
  this.length = this.element.value.length;
};

TwitterCounter.prototype.update = function update () {
  this.updateLength();
  this.updateCounter();
};

TwitterCounter.prototype.updateLength = function updateLength () {
  this.setLength(); // for now
};

TwitterCounter.prototype.updateCounter = function updateCounter (argument) {
  if (this.lengthExceeded()) {
    this.counter.className = "max-length-exceeded"; // temporary solution
  } else {
    this.counter.className = ""; // Temporary solution. You can call me asshole if it helps.
  };
  var remaining = this.maxLength - this.length;
  this.counter.innerHTML = remaining;
};

TwitterCounter.prototype.lengthExceeded = function lengthExceeded () {
  return this.length > this.maxLength;
};
