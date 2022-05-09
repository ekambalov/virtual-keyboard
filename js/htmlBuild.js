export const createHTML = () => {
    const body = document.querySelector('body');
    const container = document.createElement('div');
        container.classList.add('container');    

    const title = document.createElement('h1');    
        title.classList.add('title');
        title.textContent = 'virtual keyboard';    
    const input = document.createElement('textarea');
        input.classList.add('input');  
        input.disabled = 'disabled'   
    const keyboardWrapper = document.createElement('div');
        keyboardWrapper.classList.add('keyboard__wrapper');

    const info = document.createElement('div');
        info.classList.add('info');
    const infoOS = document.createElement('p');
        infoOS.classList.add('info__OS');
        infoOS.textContent = 'Made on Windows'
    const infoLang = document.createElement('p');
        infoLang.classList.add('info__Lang');
        infoLang.textContent = 'press Ctrl+Shift for changing language';

    body.append(container);
    container.append(title)
    container.append(input)
    container.append(keyboardWrapper)
    container.append(info)

    info.append(infoOS)
    info.append(infoLang)

}