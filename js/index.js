import { createHTML } from "./htmlBuild.js";
import keyboard from './keyboard.js'



createHTML();

const body = document.querySelector('body');
const keyWrapper = document.querySelector('.keyboard__wrapper');


let keys = [];

for(let i=0; i<63; i++){
    keys[i] = document.createElement('button');
    keys[i].classList.add('keyboard__item');   
    keys[i].classList.add(`keyboard__${i}`);
    keyWrapper.append(keys[i]);
}

function changeKey(lang) {
    for(let i = 0; i<63; i++){
        keys[i].textContent = lang==='en'? keyboard[i].en.unshift : keyboard[i].bel.unshift 
    }
}

changeKey('en');



