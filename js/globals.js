var initGlobals = function(canvas) {

  var globals = {
    gameWidth: 0,
    gameHeight: 0,
    spriteWidth: 46,
    spriteHeight: 46,
    states: {
      NONE: 0,
      STAND: 1,
      BEGIN_MOVE_RIGHT: 2,
      BEGIN_MOVE_LEFT: 4,
      MOVE_RIGHT: 8,
      MOVE_LEFT: 16,
      END_MOVE_RIGHT: 32,
      END_MOVE_LEFT: 64,
      BEGIN_JUMP_RIGHT: 128,
      BEGIN_JUMP_LEFT: 256,
      BEGIN_JUMP_UP: 512,
      JUMP_RIGHT: 1024,
      JUMP_LEFT: 2048,
      JUMP_UP: 4096,
      FALL_RIGHT: 8192,
      FALL_LEFT: 16384,
      FALL_DOWN: 32768,
      LAND_RIGHT: 65536,
      LAND_LEFT: 131072,
      LAND_DOWN: 262144
    }
  };

  window.onresize = function() { 
    globals.gameWidth = window.innerWidth - 4;
    globals.gameHeight = window.innerHeight - 4;
    canvas.width = window.innerWidth - 4;
    canvas.height = window.innerHeight - 4;
  };
  window.onresize();

  return globals;
}
