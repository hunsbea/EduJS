var initGame = function(gameObjs, canvas) {

  var running = false;

  var game = {
    start: function() { 
      running = true; 
      gameLoop();
    },
    pause: function() { 
      running = false; 
    },
    resume: function() {
      running = true;
    }
  };

  var targetFPS = 60;
  var delay_ms = 1000/targetFPS;
  var context = canvas.getContext("2d");

  //Main game loop
  var gameLoop = function() {
    var start_ms = Date.now();

    if(running) {
      for(index in gameObjs) {
        var obj = gameObjs[index];
        obj.update();
      }
      for(index in gameObjs) {
        var obj = gameObjs[index];
        obj.draw(context);
      }
    }

    var elapsed_ms = Date.now() - start_ms; 
    var wait_ms = Math.max(delay_ms - elapsed_ms, 0);
    setTimeout(gameLoop, wait_ms); 
  };

  return game;
};
