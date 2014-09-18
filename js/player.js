var initPlayer = function() {

  var Player = function() {
    GameObject.call(this);
    this.animations = {
      stand: new Animation(sprites.hamtaro.stand),
      run_right: new Animation(sprites.hamtaro.run_right),
      run_left: new Animation(sprites.hamtaro.run_left)
    }
    this.animation = this.animations.stand;
    this.active = true;
    this.visible = true;
    this.up = function() { };
    this.stopUp = function() { };
    this.right = function() {
      if(!(this.state == globals.states.MOVE_RIGHT)) {
        this.state = globals.states.MOVE_RIGHT;
        this.animation = this.animations.run_right;
        this.animation.reset();
        this.animation.start();
        this.vx = 7;
      }
    };
    this.stopRight = function() {
      this.state = globals.states.STAND;
      this.animation = this.animations.stand;
      this.animation.reset();
      this.animation.start();
      this.vx = 0;
    };
    this.left = function() {
      if(!(this.state == globals.states.MOVE_LEFT)) {
        this.state = globals.states.MOVE_LEFT;
        this.animation = this.animations.run_left;
        this.animation.reset();
        this.animation.start();
        this.vx = -7;
      }
    };
    this.stopLeft = function() {
      this.state = globals.states.STAND;
      this.animation = this.animations.stand;
      this.animation.reset();
      this.animation.start();
      this.vx = 0;
    };
  };

  return Player;
};
