'use strict';

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var setupWindow = document.querySelector('.setup');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var openSetupBtn = document.querySelector('.setup-open');
var openSetupIcon = document.querySelector('.setup-open-icon');
var closeSetupBtn = document.querySelector('.setup-close');
var userNameInput = document.querySelector('.setup-user-name');
var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
var wizardFireball = document.querySelector('.setup-fireball-wrap');

var firstNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var lastNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var numberOfCharacters = 4;
var characters = [];

function onPopupEscPress(evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closeSetup();
  }
}

function onIconEnterPress() {
  document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      showSetup();
    }
  });
}

function onCloseEnterPress() {
  document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      closeSetup();
    }
  });
}

function showSetup() {
  setupWindow.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
}

function closeSetup() {
  setupWindow.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
}

function getRandomValue(arr) {
  var index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

function changeWizardCoat() {
  var color = getRandomValue(coatColors);
  wizardCoat.style.fill = color;
  document.querySelector('.setup-wizard-appearance input[type=hidden]:nth-child(2)').value = color;
}

function changeWizardEyes() {
  var color = getRandomValue(eyesColors);
  wizardEyes.style.fill = color;
  document.querySelector('.setup-wizard-appearance input[type=hidden]:nth-child(3)').value = color;
}

function changeWizardFireball() {
  var color = getRandomValue(fireballColors);
  wizardFireball.style.backgroundColor = color;
  wizardFireball.querySelector('input').value = color;
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

openSetupBtn.addEventListener('click', showSetup);
closeSetupBtn.addEventListener('click', closeSetup);
openSetupIcon.addEventListener('focus', onIconEnterPress);
closeSetupBtn.addEventListener('focus', onCloseEnterPress);
userNameInput.addEventListener('focus', function () {
  document.removeEventListener('keydown', onPopupEscPress);
});
userNameInput.addEventListener('blur', function () {
  document.addEventListener('keydown', onPopupEscPress);
});

wizardCoat.addEventListener('click', changeWizardCoat);
wizardEyes.addEventListener('click', changeWizardEyes);
wizardFireball.addEventListener('click', changeWizardFireball);

generateCharacters(numberOfCharacters);
renderSimilarCharacters();
showSimilarWizards();
