var initSprites = function(images) {

  var sprites = {
    hamtaro: {
      stand: {
        frames: [
          {x: 3, y: 22, width: globals.spriteWidth, height: globals.spriteHeight, ms: 400},
          {x: 148, y: 22, width: globals.spriteWidth, height: globals.spriteHeight, ms: 400}
        ],
        image: images.hamtaro
      },
      stand_to_run_right: {
        frames: [
          {x: 50, y: 71, width: globals.spriteWidth, height: globals.spriteHeight, ms: 60},
          {x: 93, y: 71, width: globals.spriteWidth, height: globals.spriteHeight, ms: 60},
          {x: 86, y: 1038, width: globals.spriteWidth, height: globals.spriteHeight, ms: 60}
        ],
        image: images.hamtaro
      },
      run_right_to_stand: {
        frames: [
          {x: 86, y: 1038, width: globals.spriteWidth, height: globals.spriteHeight, ms: 60},
          {x: 93, y: 71, width: globals.spriteWidth, height: globals.spriteHeight, ms: 60},
          {x: 50, y: 71, width: globals.spriteWidth, height: globals.spriteHeight, ms: 60}
        ],
        image: images.hamtaro
      },
      stand_to_run_left: {
        frames: [
          {x: 315, y: 71, width: globals.spriteWidth, height: globals.spriteHeight, ms: 60},
          {x: 273, y: 71, width: globals.spriteWidth, height: globals.spriteHeight, ms: 60},
          {x: 354, y: 1038, width: globals.spriteWidth, height: globals.spriteHeight, ms: 60}
        ],
        image: images.hamtaro
      },
      run_left_to_stand: {
        frames: [
          {x: 354, y: 1038, width: globals.spriteWidth, height: globals.spriteHeight, ms: 60},
          {x: 273, y: 71, width: globals.spriteWidth, height: globals.spriteHeight, ms: 60},
          {x: 315, y: 71, width: globals.spriteWidth, height: globals.spriteHeight, ms: 60}
        ],
        image: images.hamtaro
      },
      run_left: {
        frames: [
          {x: 180, y: 368, width: globals.spriteWidth, height: globals.spriteHeight, ms: 100},
          {x: 230, y: 368, width: globals.spriteWidth, height: globals.spriteHeight, ms: 100},
          {x: 279, y: 368, width: globals.spriteWidth, height: globals.spriteHeight, ms: 100},
          {x: 327, y: 368, width: globals.spriteWidth, height: globals.spriteHeight, ms: 100}
        ],
        image: images.hamtaro
      },
      run_right: {
        frames: [
          {x: 184, y: 322, width: globals.spriteWidth, height: globals.spriteHeight, ms: 100},
          {x: 234, y: 322, width: globals.spriteWidth, height: globals.spriteHeight, ms: 100},
          {x: 284, y: 322, width: globals.spriteWidth, height: globals.spriteHeight, ms: 100},
          {x: 331, y: 322, width: globals.spriteWidth, height: globals.spriteHeight, ms: 100}
        ],
        image: images.hamtaro
      },
      start_jump_left: {
        frames: [
          {x: 327, y: 368, width: globals.spriteWidth, height: globals.spriteHeight, ms: 130}
        ],
        image: images.hamtaro
      },
      jump_left: {
        frames: [
          {x: 180, y: 368, width: globals.spriteWidth, height: globals.spriteHeight, ms: 1000}
        ],
        image: images.hamtaro
      },
      fall_left: {
        frames: [
          {x: 230, y: 368, width: globals.spriteWidth, height: globals.spriteHeight, ms: 1000}
        ],
        image: images.hamtaro
      },
      end_fall_left: {
        frames: [
          {x: 279, y: 369, width: globals.spriteWidth, height: globals.spriteHeight, ms: 130}
        ],
        image: images.hamtaro
      }
    }
  };

  return sprites;
};
