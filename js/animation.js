var initAnimation = function() {

  var Animation = function(sprite) {
    this.image = sprite.image;
    this.frames = sprite.frames;
    this.needsRepaint = true;
    this.currentIndex = 0;
    this.timer = new AnimationTimer();
    this.prevX = -1; //optimize the need to draw
    this.prevY = -1;

    this.start = function() {
      this.timer.start();
    }
    this.reset = function() {
      this.currentIndex = 0;
      this.prevX = -1;
      this.prevY = -1;
      this.timer.reset();
    }
    this.update = function() {
      if(this.timer.expired(this.frames[this.currentIndex].ms)) {
        this.currentIndex = 
          (this.currentIndex + 1) % this.frames.length;
        this.needsRepaint = true;
      }
    }
    this.draw = function(context, x, y) {
      var imgX = this.frames[this.currentIndex].x;
      var imgY = this.frames[this.currentIndex].y;

      if(x != this.prevX || y != this.prevY) {
        this.needsRepaint = true;
      }

      if(this.needsRepaint) {
        //TODO: cannot clear screen here
        context.clearRect(0, 0, globals.gameWidth, globals.gameHeight);
        context.drawImage(this.image, imgX, imgY, globals.spriteWidth,
          globals.spriteHeight, x, y, globals.spriteWidth, 
          globals.spriteHeight);
        this.needsRepaint = false;
      }
      this.prevX = x;
      this.prevY = y;
    }
  }

  return Animation;
};
