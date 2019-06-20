'use strict';

var WINDOW_WIDTH = 420;
var WINDOW_HEIGHT = 270;
var OFFSET_TEXT_X = 120;

window.renderStatistics = function (ctx, names, times) {

  var maxTime = 0;
  var heightRatio;
  var offsetBar = 140;
  var heightBar;

  for (var i = 0; i < times.length; i++) {
    if (times[i] > maxTime) {
      maxTime = times[i];
    }
  }

  heightRatio = 150 / Math.floor(maxTime);

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, WINDOW_WIDTH, WINDOW_HEIGHT);
  ctx.fillStyle = '#fff';
  ctx.fillRect(100, 10, WINDOW_WIDTH, WINDOW_HEIGHT);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', OFFSET_TEXT_X, 40);
  ctx.fillText('Список результатов:', OFFSET_TEXT_X, 60);

  for (var j = 0; j < names.length; j++) {
    heightBar = Math.floor(times[j] * heightRatio);
    ctx.fillStyle = '#000';
    ctx.fillText(Math.floor(times[j]).toString(), offsetBar, 240 - heightBar);
    ctx.fillText(names[j], offsetBar, 260);

    ctx.fillStyle = 'blue';
    if (names[j] === 'Вы') {
      ctx.fillStyle = 'red';
    }
    ctx.fillRect(offsetBar, 245 - heightBar, 40, heightBar);

    offsetBar += 90;
  }
};
