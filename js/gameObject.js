var initGameObject = function() {

  var GameObject = function() {
    this.x = 0;
    this.y = 0;
    this.vx = 0;
    this.vy = 0;
    this.width = 0;
    this.height = 0;
    this.visible = false;
    this.active = false;
    this.state = globals.states.NONE;
    this.animation = null;
    this.update = function() {
      if(this.active) {
        this.x += this.vx;
        this.y += this.vy;
        this.animation.update();
      }
    };
    this.draw = function(context) {
      if(this.visible) {
        this.animation.draw(context, this.x, this.y);
      }
    };
    this.intersects = function(other) {
      return !(other.x > this.x + this.width ||
        other.x + other.width < this.x ||
        other.y > this.y + this.height ||
        other.y + other.height < this.y);
    };
  }

  return GameObject;
};
