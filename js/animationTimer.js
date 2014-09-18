var initAnimationTimer = function() {

  var AnimationTimer = function() {
    var bufferMs = 0;
    var prevTimeMs = 0;
    var currentTimeMs = 0;

    this.start = function() {
      this.prevTimeMs = this.currentTimeMs = Date.now();
    }
    this.reset = function() {
      bufferMs = 0;
      prevTimeMs = 0;
      currentTimeMs = 0;
    }
    this.expired = function(ms) {
      var expired = false;
      currentTimeMs = Date.now();
      bufferMs += (currentTimeMs - prevTimeMs);
      if(bufferMs > ms) {
        expired = true;
        bufferMs %= ms; //%= to fix inactive window bug
      }
      prevTimeMs = currentTimeMs;
      return expired;
    }
  }

  return AnimationTimer;
}
