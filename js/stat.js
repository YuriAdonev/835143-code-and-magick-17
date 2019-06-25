'use strict';

var WINDOW_WIDTH = 420;
var WINDOW_HEIGHT = 270;
var OFFSET_TEXT_X = 120;
var OFFSET_NAME_Y = 260;
var OFFSET_VALUE_Y = 240;
var CHART_HEIGHT = 150;
var BOTTOM_BAR_Y = 245;
var WIDTH_BAR = 40;
var GAP_BAR = 50;

function renderClouds(ctx) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, WINDOW_WIDTH, WINDOW_HEIGHT);
  ctx.fillStyle = '#fff';
  ctx.fillRect(100, 10, WINDOW_WIDTH, WINDOW_HEIGHT);
}

function renderWinMessage(ctx) {
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', OFFSET_TEXT_X, 40);
  ctx.fillText('Список результатов:', OFFSET_TEXT_X, 60);
}

function getMaxValue(arr) {
  var maxValue = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxValue) {
      maxValue = arr[i];
    }
  }
  return maxValue;
}

function getRandomBlueColor() {
  return 'rgba(0, 0,' + Math.floor(Math.random() * 255) + ' , 1)';
}

window.renderStatistics = function (ctx, names, times) {

  var maxTime = getMaxValue(times);
  var heightRatio;
  var offsetBar = 140;
  var heightBar;

  heightRatio = CHART_HEIGHT / Math.floor(maxTime);

  renderClouds(ctx);
  renderWinMessage(ctx);

  for (var j = 0; j < names.length; j++) {
    heightBar = Math.floor(times[j] * heightRatio);
    ctx.fillStyle = '#000';
    ctx.fillText(Math.floor(times[j]).toString(), offsetBar, OFFSET_VALUE_Y - heightBar);
    ctx.fillText(names[j], offsetBar, OFFSET_NAME_Y);

    ctx.fillStyle = getRandomBlueColor();
    if (names[j] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }
    ctx.fillRect(offsetBar, BOTTOM_BAR_Y - heightBar, WIDTH_BAR, heightBar);

    offsetBar += (WIDTH_BAR + GAP_BAR);
  }
};
