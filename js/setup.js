'use strict';

var setupWindow = document.querySelector('.setup');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var firstNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var lastNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

var numberOfCharacters = 4;
var characters = [];

function showSetup() {
  setupWindow.classList.remove('hidden');
}

function closeSetup() {
  setupWindow.classList.add('hidden');
}

function getRandomValue(arr) {
  var index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

function generateCharacters(num) {
  characters = [];
  for (var i = 0; i < num; i++) {
    var character = {
      name: getRandomValue(firstNames) + ' ' + getRandomValue(lastNames),
      coatColor: getRandomValue(coatColors),
      eyesColor: getRandomValue(eyesColors)
    };
    characters.push(character);
  }
}

function renderSimilarCharacters() {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < characters.length; i++) {
    var element = similarWizardTemplate.cloneNode(true);
    element.querySelector('.setup-similar-label').textContent = characters[i].name;
    element.querySelector('.wizard-coat').style.fill = characters[i].coatColor;
    element.querySelector('.wizard-eyes').style.fill = characters[i].eyesColor;
    fragment.appendChild(element);
  }
  document.querySelector('.setup-similar-list').appendChild(fragment);
}

function showSimilarWizards() {
  document.querySelector('.setup-similar').classList.remove('hidden');
}

function hideSimilarWizards() {
  document.querySelector('.setup-similar').classList.add('hidden');
}

showSetup();

generateCharacters(numberOfCharacters);
renderSimilarCharacters();
showSimilarWizards();
