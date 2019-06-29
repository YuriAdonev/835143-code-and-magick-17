'use strict';

var setupWindow = document.querySelector('.setup');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var firstNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var lastNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

var numberOfCharacters = 4;
var characters = [];

setupWindow.classList.remove('hidden');

function getRandomValue(arr) {
  var index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

function generateCharacters(num) {
  for (var i = 0; i < num; i++) {
    var character = {
      name: getRandomValue(firstNames) + ' ' + getRandomValue(lastNames),
      coatColor: getRandomValue(coatColors),
      eyesColor: getRandomValue(eyesColors)
    };
    characters.push(character);
  }
}

function renderSimilarList(arr, temp) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < arr.length; i++) {
    var element = temp.cloneNode(true);
    element.querySelector('.setup-similar-label').textContent = arr[i].name;
    element.querySelector('.wizard-coat').style.fill = arr[i].coatColor;
    element.querySelector('.wizard-eyes').style.fill = arr[i].eyesColor;
    fragment.appendChild(element);
  }
  document.querySelector('.setup-similar-list').appendChild(fragment);
}

generateCharacters(numberOfCharacters);

renderSimilarList(characters, similarWizardTemplate);

document.querySelector('.setup-similar').classList.remove('hidden');
