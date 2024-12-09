$.prototype.on = function (eventName, cb) {
  
  if (!eventName || !cb) return this;

  for(let i = 0; i < this.length; i++) {
    this[i].addEventListener(eventName, cb)
  }

  return this;
};