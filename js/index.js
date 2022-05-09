import { createHTML } from './htmlBuild.js';
import keyboard from './keyboard.js';

createHTML();

const keyWrapper = document.querySelector('.keyboard__wrapper');
const input = document.querySelector('.input');

let shiftMode = false;
let currentLang = 'en';
let capsMode = false;

const checkKey = (i) => {
  const condition1 = i === 13 || i === 14 || i === 28 || i === 40 || i === 41;
  const condition2 = (i >= 53 && i <= 56) || (i >= 58 && i <= 59);
  if (condition1 || condition2) return false;
  return true;
};

// creating keyboard

const keys = [];

for (let i = 0; i < 63; i += 1) {
  keys[i] = document.createElement('button');
  keys[i].classList.add('keyboard__item');
  keys[i].classList.add(`keyboard__${i}`);
  keyWrapper.append(keys[i]);
}

function changeKeyboard(lang, shiftMod, capsMod) {
  for (let i = 0; i < 63; i += 1) {
    if (!shiftMod && !capsMod) {
      keys[i].textContent = lang === 'en'
        ? keyboard[i].en.unshift : keyboard[i].bel.unshift;
    }
    if (shiftMod && !capsMod) {
      keys[i].textContent = lang === 'en'
        ? keyboard[i].en.shift : keyboard[i].bel.shift;
    }
    if (!shiftMod && capsMod && checkKey(i)) {
      keys[i].textContent = lang === 'en'
        ? keyboard[i].en.unshift.toUpperCase() : keyboard[i].bel.unshift.toUpperCase();
    }
    if (shiftMod && capsMod && checkKey(i)) {
      keys[i].textContent = lang === 'en'
        ? keyboard[i].en.shift.toLowerCase() : keyboard[i].bel.shift.toLowerCase();
    }
  }
}

changeKeyboard('en', shiftMode, capsMode);

const onShiftMode = () => {
  shiftMode = true;
  changeKeyboard(currentLang, shiftMode, capsMode);
  input.focus();
};
const offShiftMode = () => {
  shiftMode = false;
  changeKeyboard(currentLang, shiftMode, capsMode);
  input.focus();
};

const keyOn = (key) => {
  if (!capsMode) {
    input.value += (shiftMode)
      ? key[currentLang].shift : key[currentLang].unshift;
  }
  if (capsMode) {
    input.value += (shiftMode)
      ? key[currentLang].shift.toLowerCase() : key[currentLang].unshift.toUpperCase();
  }
  input.focus();
};

// input by mouse

for (let i = 0; i < 63; i += 1) {
  keys[i].addEventListener('click', () => {
    if (checkKey(i)) keyOn(keyboard[i]);
    input.focus();
  });
}

// input by keyboard

document.addEventListener('keydown', (e) => {
  for (let i = 0; i < 63; i += 1) {
    if (e.keyCode === keyboard[i].keyCode) {
      if (e.code === 'ShiftLeft') {
        keys[41].classList.add('keyboard__item--active');
        break;
      }
      if (e.code === 'ShiftRight') {
        keys[53].classList.add('keyboard__item--active');
        break;
      }
      if (e.code === 'ControlLeft') {
        keys[54].classList.add('keyboard__item--active');
        break;
      }
      if (e.code === 'ControlRight') {
        keys[59].classList.add('keyboard__item--active');
        break;
      }
      if (e.code === 'ControlLeft') {
        keys[54].classList.add('keyboard__item--active');
        break;
      }
      if (e.code === 'ControlRight') {
        keys[59].classList.add('keyboard__item--active');
        break;
      }
      if (e.code === 'AltLeft') {
        keys[56].classList.add('keyboard__item--active');
        break;
      }
      if (e.code === 'AltRight') {
        keys[58].classList.add('keyboard__item--active');
        break;
      }
      keys[i].classList.add('keyboard__item--active');
      if (!capsMode) {
        if (checkKey(i)) {
          input.value += (shiftMode)
            ? keyboard[i][currentLang].shift : keyboard[i][currentLang].unshift;
        }
      }
      if (capsMode) {
        if (checkKey(i)) {
          input.value += (shiftMode)
            ? keyboard[i][currentLang].shift.toLowerCase()
            : keyboard[i][currentLang].unshift.toUpperCase();
        }
      }
    }
  }
});

document.addEventListener('keyup', (e) => {
  for (let i = 0; i < 63; i += 1) {
    if (e.keyCode === keyboard[i].keyCode) {
      keys[i].classList.remove('keyboard__item--active');
    }
  }
});

// shift

document.addEventListener('keydown', (e) => {
  if (e.keyCode === 16) onShiftMode();
});
document.addEventListener('keyup', (e) => {
  if (e.keyCode === 16) offShiftMode();
});
keys[41].addEventListener('mousedown', onShiftMode);
keys[41].addEventListener('mouseup', offShiftMode);
keys[41].addEventListener('mouseover', offShiftMode);
keys[53].addEventListener('mousedown', onShiftMode);
keys[53].addEventListener('mouseup', offShiftMode);
keys[53].addEventListener('mouseover', offShiftMode);

// backspace

const backspace = () => {
  input.value = input.value.slice(0, input.value.length - 1);
};

keys[13].addEventListener('click', backspace);

document.addEventListener('keydown', (e) => {
  if (e.keyCode === 8) backspace();
});

// CapsLock

const CapsLock = () => {
  capsMode = !capsMode;
  changeKeyboard(currentLang, shiftMode, capsMode);
};

keys[28].addEventListener('click', CapsLock);

document.addEventListener('keydown', (e) => {
  if (e.keyCode === 20) CapsLock();
});

// Enter

const Enter = () => {
  input.value += '\n';
};

keys[40].addEventListener('click', Enter);

document.addEventListener('keydown', (e) => {
  if (e.keyCode === 13) Enter();
});

// changing language

function runOnKeys(...codes) {
  const pressed = new Set();

  document.addEventListener('keydown', (event) => {
    pressed.add(event.keyCode);

    for (const code of codes) { // все ли клавиши из набора нажаты?
      if (!pressed.has(code)) {
        return;
      }
    }

    pressed.clear();

    if (currentLang === 'en') {
      currentLang = 'bel';
    } else {
      currentLang = 'en';
    }

    changeKeyboard(currentLang, shiftMode, capsMode);
  });

  document.addEventListener('keyup', (event) => {
    pressed.delete(event.code);
  });
}

runOnKeys(16, 17);

// local storage

function setLocalStorage() {
  localStorage.setItem('currentLang', currentLang);
  localStorage.setItem('capsMode', capsMode);
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
  if (localStorage.getItem('currentLang')) {
    currentLang = localStorage.getItem('currentLang');
    if (localStorage.getItem('capsMode') === 'true') capsMode = true;
    if (localStorage.getItem('capsMode') === 'false') capsMode = false;

    changeKeyboard(currentLang, shiftMode, capsMode);
  }
}
window.addEventListener('load', getLocalStorage);

// Tab

const Tab = () => {
  input.value += '    ';
};

keys[14].addEventListener('click', Tab);

document.addEventListener('keydown', (e) => {
  if (e.keyCode === 9) {
    Tab();
    input.focus();
  }
});
