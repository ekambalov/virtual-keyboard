let keyCode = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 
    189, 187, 8, 9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 
    219, 221, 220, 20, 65, 83, 68, 70, 71, 72, 74, 75, 
    76, 186, 222, 13, 16, 90, 88, 67, 86, 66, 78, 77, 188, 
    190, 191, 16, 17, 91, 18, 32, 18, 17, 37, 38, 40, 39];

let keyEnUnshift = ['`', '1', '2', '3', '4', '5', '6', '7', '8', 
    '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 
    'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'CapsLock', 
    'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 
    'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift', 
    'Control', 'Meta', 'Alt', ' ', 'Alt', 'Control', 'ArrowLeft', 
    'ArrowUp', 'ArrowDown', 'ArrowRight'];

let keyEnShift = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', 
    '_', '+', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I',
    'O', 'P', '{', '}', '|', 'CapsLock', 'A', 'S', 'D', 'F',  'G', 'H', 
    'J', 'K', 'L', ':', '"', 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 
    'N', 'M', '<', '>', 'Shift', '?', 'Control', 'Meta', 'Alt', ' ', 'Alt',
    'Control', 'ArrowLeft', 'ArrowUp', 'ArrowDown', 'ArrowRight'];


let keyBelUnshift = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 
    '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 
    'ў', 'з', 'х', "'", '\\', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 
    'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'і', 'т',
    'ь', 'б', 'ю', '.', 'Shift', 'Control', 'Meta', 'Alt', ' ', 'Alt', 
    'Control', 'ArrowLeft', 'ArrowUp', 'ArrowDown', 'ArrowRight'];

let keyBelShift = ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', 
    '_', '+', 'Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 
    'Ў', 'З', 'Х', "'", '/', 'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 
    'Л', 'Д', 'Ж', 'Э', 'Enter', 'Shift', 'Я', 'Ч', 'С', 'М', 'І', 'Т', 'Ь', 
    'Б', 'Ю', ',', 'Shift', 'Control', 'Meta', 'Alt', ' ', 'Alt', 'Control', 
    'ArrowLeft', 'ArrowUp', 'ArrowDown', 'ArrowRight'];    

let keyboard = [];

    for(let i = 0; i < 63; i++){
        keyboard[i]= {
            keyCode: keyCode[i],
            en: {
                unshift: keyEnUnshift[i],
                shift: keyEnShift[i]
            },
            bel: {
                unshift: keyBelUnshift[i],
                shift: keyBelShift[i]
            }
        }
    }

    export default keyboard;