window.onload = function() {
var s = window.screen,
  width = q.width = s.width,
  height = q.height = s.height
  letters = Array(256).join(1).split(''),
  draw = function () {
    q.getContext('2d').fillStyle='rgba(0,0,0,.05)';
    q.getContext('2d').fillRect(0,0,width,height);
    q.getContext('2d').fillStyle='#0F0';
    letters.map(function(y_pos, index){
      text = String.fromCharCode(3e4+Math.random()*33);
      x_pos = index * 10;
      q.getContext('2d').fillText(text, x_pos, y_pos);
      letters[index] = (Math.random() > 0.99) ? 0 : y_pos + 10;
    });
  };
setInterval(draw, 33);
};