const imageDiv = document.getElementById('images');
const button = document.getElementById('button');
const bulb = document.getElementById('bulb');


let isOn = false;

const on = () => {
    bulb.src = './images/bulb-on.png';
    bulb.classList.add('on');
    isOn = true;
}

const off = () => {
    bulb.src = './images/bulb-off.png';
    bulb.classList.remove('on');
    isOn = false;
}

const toggle = () => {
    if(isOn) {
        on();
    } else {
        off();
    }
}

button.addEventListener('click', toggle);

