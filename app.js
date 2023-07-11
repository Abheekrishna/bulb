const imageDiv = document.getElementById('images');
const button = document.getElementById('button');
const bulb = document.getElementById('bulb');
const year = document.getElementById('year');


let isOn = false;

const on = () => {
    bulb.src = './images/bulb-on.png';
    bulb.classList.add('on');
    isOn = false;
}

const off = () => {
    bulb.src = './images/bulb-off.png';
    bulb.classList.remove('on');
    isOn = true;
}

const toggle = () => {
    if(isOn === true) {
        on();
    } else {
        off();
    }
}

button.addEventListener('click', toggle);

const newYear = (new Date()).getFullYear();
year.innerText = newYear;

console.log('Hey I know you\'re a dev!! \nGot an idea 💡. Let\'s work together, contact me 👇🏻 \nabheekrishna17@gmail.com');
