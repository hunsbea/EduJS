var initInput = function(player, inputElement) {

  inputElement.onkeydown = function(event) {
    if(event.keyCode == 37) { player.left(); }
    else if(event.keyCode == 39) { player.right(); }
    else if(event.keyCode == 38) { player.up(); }
  }

  inputElement.onkeyup = function(event) {
    if(event.keyCode == 37) { player.stopLeft(); }
    else if(event.keyCode == 39) { player.stopRight(); }
    else if(event.keyCode == 38) { player.stopUp(); }
  }

  return {};
}
